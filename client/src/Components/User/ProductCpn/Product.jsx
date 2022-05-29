import React from 'react'
import PrdCpn from './PrdCpn'

const Product = () => {
    return (
        <div className="products">
            <div className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Latest product</h2>
                    </div>
                    {/* <div className="row" id="latest-products">
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={slide_1} alt="" />
                                    <img src={slide_2} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">
                                            shop now
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <i className="bx bxs-cart-add"></i>
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <i className="bx bxs-heart"></i>
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL Quantum 400
                                    </div>
                                    <div className="product-card-price">
                                        <span>
                                            <del>$300</del>
                                        </span>
                                        <span className="curr-price">$200</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <PrdCpn />
                    <div className="section-footer">
                        <a href="./products" className="btn-flat btn-hover">
                            view all
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
