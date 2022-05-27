import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    productsReducer,
    productDetailsReducer,
    productReviewsReducer,
    newReviewReducer,
    newProductReducer,
    deleteReviewReducer,
    deleteProductReducer
} from './Reducers/ProductReducer'
import {
    allUsersReducer,
    forgotPasswordReducer,
    profileReducer,
    userDetailsReducer,
    userReducer
} from './Reducers/UserReducer'
import { cartReducer } from './Reducers/CartReducer'
import { favouriteReducer } from './Reducers/FavouriteReducer'
import {
    allOrdersReducer,
    myOrdersReducer,
    newOrderReducer,
    orderDetailsReducer,
    orderReducer
} from './Reducers/OrderReducer'
import {
    categoriesReducer,
    newCategoryReducer,
    updateCategoryReducer,
    deleteCategoryReducer
} from './Reducers/CategoryReducer'

const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    favourite: favouriteReducer,
    order: newOrderReducer,
    myOrder: myOrdersReducer,
    myOrderDetails: orderDetailsReducer,
    newReview: newReviewReducer,
    createProduct: newProductReducer,
    deleteProduct: deleteProductReducer,
    createCategory: newCategoryReducer,
    updateCategory: updateCategoryReducer,
    deleteCategory: deleteCategoryReducer,
    AllOrders: allOrdersReducer,
    deleteOrder: orderReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    deleteReview: deleteReviewReducer,
    productReviews: productReviewsReducer,
    forgotPassword: forgotPasswordReducer
})

let initialState = {
    // userInfo: localStorage.getItem('userInfo')
    //     ? JSON.parse(localStorage.getItem('userInfo'))
    //     : [],
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    },
    favourite: {
        favouriteItems: localStorage.getItem('favouriteItems')
            ? JSON.parse(localStorage.getItem('favouriteItems'))
            : []
    }
}

const middleWare = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store
