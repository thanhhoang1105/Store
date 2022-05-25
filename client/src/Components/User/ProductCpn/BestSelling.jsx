import React from 'react'

const BestSelling = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="section-header">
                    <h2>best selling</h2>
                </div>
                <div className="row" id="best-products">
                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="product-card">
                            <div className="product-card-img">
                                <img
                                    src="https://res.cloudinary.com/shopecommerceonline/image/upload/v1652973500/shoe/image-removebg-preview_tcjijb.png"
                                    alt=""
                                />
                                <img
                                    src="https://res.cloudinary.com/shopecommerceonline/image/upload/v1652973692/shoe/image-removebg-preview_1_etj85x.png"
                                    alt=""
                                />
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
                </div>
                <div className="section-footer">
                    <a href="./products.html" className="btn-flat btn-hover">
                        view all
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BestSelling
