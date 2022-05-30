import React from 'react'
import { useSelector } from 'react-redux'

import './style.css'
import TopTotal from '../../../Components/Admin/DasboardCpn/TopTotal/Toptotal'
import LatestOrder from '../../../Components/Admin/DasboardCpn/LatestOrder/LatestOrder'

const DashboardAdminPage = () => {
    const { orders, loading, error } = useSelector(state => state.AllOrders)

    const { products } = useSelector(state => state.products)

    console.log('orders', orders)
    return (
        <>
            <section className="content-main">
                <div className="content-header">
                    <h2 className="content-title"> Dashboard </h2>
                </div>
                {/* Top Total */}
                <TopTotal orders={orders} products={products} />

                <div className="row">
                    {/* STATICS */}
                    {/* <SaleStatistics />
          <ProductsStatistics /> */}
                </div>

                {/* LATEST ORDER */}
                <div className="card mb-4 shadow-sm">
                    {/* <LatestOrder
                        orders={orders}
                        loading={loading}
                        error={error}
                    /> */}
                </div>
            </section>
        </>
    )
}

export default DashboardAdminPage
