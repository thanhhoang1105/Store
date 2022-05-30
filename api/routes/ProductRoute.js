const express = require('express')

const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getSingleProduct,
    getAdminProducts,
    createProductReview,
    getSingleProductReviews,
    updateProductReview,
    deleteReview
} = require('../controller/ProductController')
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')
const router = express.Router()

router.route('/products').get(getAllProducts)

router
    .route('/admin/products')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getAdminProducts)

router
    .route('/admin/product/new')
    .post(isAuthenticatedUser, authorizeRoles('admin'), createProduct)

router
    .route('/admin/product/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct)

router.route('/product/:id').get(getSingleProduct)

router.route('/product/review').post(isAuthenticatedUser, createProductReview)

router
    .route('/reviews')
    .get(getSingleProductReviews)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteReview)

router.route('/review/:id').put(isAuthenticatedUser, updateProductReview)

module.exports = router
