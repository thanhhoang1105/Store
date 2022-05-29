import React from 'react'
import SidebarAdminLeft from '../Components/Admin/Sidebar/SidebarAdminLeft'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <SidebarAdminLeft />
                <Outlet />
            </div>
        </div>
    )
}

export default LayoutAdmin
