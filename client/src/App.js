import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import WebFont from 'webfontloader'

import './App.css'
import { useSelector } from 'react-redux'
import { loadUser } from './Redux/Actions/UserAction'
import { getCategories } from './Redux/Actions/CategoryAction'
import store from './Redux/store'

import LayoutUser from './Layout/LayoutUser'
import LoginSignup from './Pages/User/Auth/LoginSignup'
import DetailProductPage from './Pages/User/DetailProductPage/DetailProductPage'
import HomePage from './Pages/User/HomePage/HomePage'
import ProductPage from './Pages/User/ProductPage/ProductPage'
import Loading from './Components/User/More/Loader'
import Profile from './Pages/User/ProfileUserPage/Profile'
import EditProfile from './Pages/User/ProfileUserPage/Edit'

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
    }, [])

    return (
        <Routes>
            <Route path="/" element={<LayoutUser />}>
                <Route index element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/product/:id" element={<DetailProductPage />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
            {/* <Route path="/info" element={<EditProfile />} /> */}

            <Route path="/load" element={<Loading />} />
            <Route path="/auth" element={<LoginSignup />} />
        </Routes>
    )
}

export default App
