import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/User/FooterCpn/Footer'
import Header from '../Components/User/HeaderCpn/Header'

const LayoutUser = () => {
    window.scrollTo({ top: 0 })
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default LayoutUser
