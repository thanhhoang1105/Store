const User = require('../models/UserModel')
const ErrorHandler = require('../utils/ErrorHandler.js')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const sendToken = require('../utils/jwtToken.js')
const sendMail = require('../utils/sendMail.js')
const crypto = require('crypto')

//Register User
exports.createUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'https://test.com/image.jpg',
            url: 'https://test.com/image.jpg'
        }
    })

    const token = user.getJwtToken()

    res.status(201).json({
        success: true,
        token
    })
})

//Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return next(new ErrorHandler('Please enter the email & password', 400))
    }

    const user = await User.findOne({ email }).select('+password')

    if (!user || !(await user.comparePassword(password, user.password))) {
        return next(new ErrorHandler('Invalid email or password', 401))
    }

    const isPasswordMatched = await user.comparePassword(password)

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid email or password', 401))
    }

    const token = user.getJwtToken()

    // res.status(201).json({
    //     success: true,
    //     token
    // })

    sendToken(user, 201, res)
})

//Logout User
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Log out success'
    })
})

// Forgot password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        return next(new ErrorHandler('User not found with this email', 404))
    }

    // Get ResetPassword Token

    const resetToken = user.getResetToken()

    await user.save({
        validateBeforeSave: false
    })

    const resetPasswordUrl = `${req.protocol}://${req.get(
        'host'
    )}/password/reset/${resetToken}`

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl}`

    try {
        await sendMail({
            email: user.email,
            subject: `Ecommerce Password Recovery`,
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} succesfully`
        })
    } catch (error) {
        user.resetPasswordToken = undefined
        user.resetPasswordTime = undefined

        await user.save({
            validateBeforeSave: false
        })

        return next(new ErrorHandler(error.message, 500))
    }
})

// Reset Password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    // Create Token hash

    const resetPasswordToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex')

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordTime: { $gt: Date.now() }
    })

    if (!user) {
        return next(
            new ErrorHandler(
                'Reset password url is invalid or has been expired',
                400
            )
        )
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(
            new ErrorHandler(
                'Password is not matched with the new password',
                400
            )
        )
    }

    user.password = req.body.password

    user.resetPasswordToken = undefined
    user.resetPasswordTime = undefined

    await user.save()

    sendToken(user, 200, res)
})

//Get User Details
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('-password')

    res.status(200).json({
        success: true,
        data: user
    })
})

//Update User Password
exports.updateUserPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password')

    if (!user) {
        return next(new ErrorHandler('User not found', 404))
    }

    if (
        !(await user.comparePassword(req.body.currentPassword, user.password))
    ) {
        return next(new ErrorHandler('Current password is incorrect', 400))
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(
            new ErrorHandler(
                'Password is not matched with the new password',
                400
            )
        )
    }

    user.password = req.body.newPassword

    await user.save()

    sendToken(user, 200, res)
})

//Update User Profile
exports.updateUserProfile = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindingAndModifying: false
    })

    res.status(200).json({
        success: true,
        user
    })
})

//Get All Users --> Admin
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find()
    res.status(200).json({
        success: true,
        users
    })
})

//Get Single User Details --> Admin
exports.getSingleUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        return next(new ErrorHandler('User not found', 404))
    }

    res.status(200).json({
        success: true,
        user
    })
})

//Update User Role --> Admin
exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindingAndModifying: false
    })

    res.status(200).json({
        success: true,
        user
    })
})

//Delete User --> Admin
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id)

    if (!user) {
        return next(new ErrorHandler('User not found', 404))
    }

    res.status(200).json({
        success: true,
        message: 'User deleted successfully'
    })
})
