const express = require('express')
const {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controller/CategoryController')
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')
const router = express.Router()

router.route('/categories').get(isAuthenticatedUser, getAllCategories)

router
    .route('/admin/category')
    .post(isAuthenticatedUser, authorizeRoles('admin'), createCategory)

router
    .route('/admin/category/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateCategory)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteCategory)

module.exports = router
