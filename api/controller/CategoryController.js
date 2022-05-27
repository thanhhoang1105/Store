const Category = require('../models/CategoryModel')
const ErrorHandler = require('../utils/ErrorHandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

//get All Categories
exports.getAllCategories = async (req, res) => {
    const categories = await Category.find()

    res.status(200).json({
        categories
    })
}

//create Category --> Admin
exports.createCategory = catchAsyncErrors(async (req, res, next) => {
    const category = await Category.create(req.body)

    res.status(201).json({
        success: true,
        category
    })
})

//Update Category --> Admin
exports.updateCategory = catchAsyncErrors(async (req, res, next) => {
    let category = await Category.findById(req.params.id)

    if (!category) {
        return next(
            new ErrorHandler(`Category with id ${req.params.id} not found`, 404)
        )
    }

    category = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false
    })

    res.status(200).json({
        success: true,
        category
    })
})

//Delete Category --> Admin
exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {
    let category = await Category.findById(req.params.id)

    if (!category) {
        return next(
            new ErrorHandler(`Category with id ${req.params.id} not found`, 404)
        )
    }

    category = await Category.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success: true
    })
})
