import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../Components/Admin/LayoutCpn/Sidebar/Sidebar'

import './styleAdmin.css'
import HeaderAdmin from '../Components/Admin/LayoutCpn/Header/HeaderAdmin'

const LayoutAdmin = () => {
    return (
        // <div className="App">
        //     <div className="AppGlass">
        //         <SidebarAdminLeft />
        //         <Outlet />
        //     </div>
        // </div>
        <>
            <Sidebar />
            <main className="main-wrap">
                <HeaderAdmin />
                <Outlet />
            </main>
        </>
    )
}

export default LayoutAdmin
