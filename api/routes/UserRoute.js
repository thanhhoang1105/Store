const express = require('express')
const {
    createUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword,
    getUserDetails,
    updateUserPassword,
    updateUserProfile,
    updateUserAvatar,
    getAllUsers,
    getSingleUserDetails,
    updateUserRole,
    deleteUser
} = require('../controller/UserController')
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')
const router = express.Router()

router.route('/registration').post(createUser)

router.route('/login').post(loginUser)

router.route('/logout').get(logoutUser)

router.route('/password/forgot').post(forgotPassword)

router.route('/password/reset/:token').put(resetPassword)

router.route('/me').get(isAuthenticatedUser, getUserDetails)

router.route('/me/update').put(isAuthenticatedUser, updateUserPassword)

router.route('/me/update/profile').put(isAuthenticatedUser, updateUserProfile)

router.route('/me/update/avatar').put(isAuthenticatedUser, updateUserAvatar)

router.get(
    '/admin/users',
    isAuthenticatedUser,
    authorizeRoles('admin'),
    getAllUsers
)

router
    .route('/admin/user/:id')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getSingleUserDetails)
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateUserRole)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser)

module.exports = router
