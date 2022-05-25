import React, { useEffect } from 'react'
import { Card, Avatar } from 'antd'
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'

import { getProduct, clearErrors } from '../../../Redux/Actions/ProductAction'
// import slide_1 from '../../../Assets/Images/JBL_Quantum_400_Product Image_Hero 02.png'
// import slide_2 from '../../../Assets/Images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png'

const { Meta } = Card

const Product = () => {
    const dispatch = useDispatch()
    const { products, error, loading } = useSelector(state => state.products)

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearErrors())
        }
        dispatch(getProduct())
    }, [dispatch, error])

    // console.log('product', products)

    return (
        <div classNameName="products">
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
                    <div
                        style={{
                            display: 'flex',
                            padding: '0px 0px 10px 0px',
                            flex: 'wrap',
                            justifyContent: 'center'
                        }}
                    >
                        {products.map(product => (
                            <div style={{ padding: '0px 10px 20px 10px' }}>
                                <Link to={`/product/${product._id}`}>
                                    <Card
                                        hoverable
                                        style={{
                                            width: 260
                                        }}
                                        cover={
                                            <img
                                                alt={product.name}
                                                src={product.images[0].url}
                                            />
                                        }
                                    >
                                        <Meta
                                            title={product.name}
                                            description={product.price}
                                        />
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="section-footer">
                        <a
                            href="./products.html"
                            className="btn-flat btn-hover"
                        >
                            view all
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
