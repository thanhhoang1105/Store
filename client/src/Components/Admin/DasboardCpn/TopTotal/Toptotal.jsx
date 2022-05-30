import React from 'react'

const Toptotal = props => {
    const { orders, products } = props
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-primary">
                            <i className="text-primary fas fa-usd-circle"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Total Sales</h6>{' '}
                            <span>55{/* ${totalSale.toFixed(0)} */}</span>
                        </div>
                    </article>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-success">
                            <i className="text-success fas fa-bags-shopping"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Total Orders</h6>
                            {orders ? (
                                <span>{orders.length}</span>
                            ) : (
                                <span>0</span>
                            )}
                        </div>
                    </article>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-warning">
                            <i className="text-warning fas fa-shopping-basket"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Total Products</h6>
                            {products ? <span>5</span> : <span>0</span>}
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Toptotal
