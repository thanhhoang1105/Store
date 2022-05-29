import React from 'react'

import Cards from '../../../Components/Admin/TopCard/Cards'
import Table from '../../../Components/Admin/Table/Table'

import './style.css'

const DashboardAdminPage = () => {
    return (
        <div className="MainDash">
            <h1 className="h1">Dashboard</h1>
            <Cards />
            <Table />
        </div>
    )
}

export default DashboardAdminPage
