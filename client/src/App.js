import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import LayoutUser from './Layout/LayoutUser'
import DetailProductPage from './Pages/User/DetailProductPage/DetailProductPage'
import HomePage from './Pages/User/HomePage/HomePage'
import ProductPage from './Pages/User/ProductPage/ProductPage'

function App() {
    window.scrollTo({ top: 0 })
    return (
        <Routes>
            <Route path="/" element={<LayoutUser />}>
                <Route index element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/product/:id" element={<DetailProductPage />} />
            </Route>
        </Routes>
    )
}

export default App
