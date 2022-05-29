import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import WebFont from 'webfontloader'

import './App.css'
import { useSelector } from 'react-redux'
import { loadUser } from './Redux/Actions/UserAction'
import { getCategories } from './Redux/Actions/CategoryAction'
import { myOrders, getAllOrders } from './Redux/Actions/OrderAction'
import store from './Redux/store'

import LayoutUser from './Layout/LayoutUser'
import LoginSignup from './Pages/User/Auth/LoginSignup'
import DetailProductPage from './Pages/User/DetailProductPage/DetailProductPage'
import HomePage from './Pages/User/HomePage/HomePage'
import ProductPage from './Pages/User/ProductPage/ProductPage'
import Loading from './Components/User/More/Loader'
import Profile from './Pages/User/ProfileUserPage/Profile'
import EditProfile from './Pages/User/ProfileUserPage/Edit'
import CartPage from './Pages/User/CartPage/CartPage'
import TrackingOrderPage from './Pages/User/TrackingOrder/TrackingOrderPage'
import TrackingOrderDetail from './Pages/User/TrackingOrderDetail/TrackingOrderDetail'

import LayoutAdmin from './Layout/LayoutAdmin'
import DashboardAdminPage from './Pages/Admin/Dashboard/DashboardAdminPage'
import OrderAdminPage from './Pages/Admin/Orders/OrderAdminPage'
import UserAdminPage from './Pages/Admin/Users/UserAdminPage'
import ProductAdminPage from './Pages/Admin/Products/ProductAdminPage'
import CategoryAdminPage from './Pages/Admin/Categories/CategoryAdminPage'
import ReviewAdminPage from './Pages/Admin/Reviews/ReviewAdminPage'
import SlideAdminPage from './Pages/Admin/Slide/SlideAdminPage'

function App() {
    window.scrollTo({ top: 0 })
    const { isAuthenticated, user } = useSelector(state => state.user)

    useEffect(() => {
        // WebFont.load({
        //     google: {
        //         families: ['Roboto', 'Droid Sans', 'Chilanka']
        //     }
        // })

        store.dispatch(loadUser())
        store.dispatch(getCategories())
        store.dispatch(myOrders())
        store.dispatch(getAllOrders())
    }, [])

    return (
        <Routes>
            <Route path="/" element={<LayoutUser />}>
                <Route index element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/product/:id" element={<DetailProductPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/orders" element={<TrackingOrderPage />} />
                <Route path="/orders/:id" element={<TrackingOrderDetail />} />
            </Route>
            {/* <Route path="/info" element={<EditProfile />} /> */}

            <Route path="/admin" element={<LayoutAdmin />}>
                <Route index element={<DashboardAdminPage />} />
                <Route path="/admin/slides" element={<SlideAdminPage />} />
                <Route path="/admin/orders" element={<OrderAdminPage />} />
                <Route path="/admin/users" element={<UserAdminPage />} />
                <Route path="/admin/products" element={<ProductAdminPage />} />
                <Route
                    path="/admin/categories"
                    element={<CategoryAdminPage />}
                />
                <Route path="/admin/reviews" element={<ReviewAdminPage />} />
            </Route>

            <Route path="/load" element={<Loading />} />
            <Route path="/auth" element={<LoginSignup />} />
        </Routes>
    )
}

export default App
