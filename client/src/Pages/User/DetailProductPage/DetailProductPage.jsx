import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Rate } from 'antd'
import { ToastContainer, toast } from 'react-toastify'

import {
    getProductDetails,
    clearErrors
} from '../../../Redux/Actions/ProductAction'

const DetailProductPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { product, error, loading } = useSelector(
        state => state.productDetails
    )

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        dispatch(getProductDetails(id))
    }, [dispatch, error, id])

    // Increase quantity
    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
        if (product.Stock <= quantity)
            return toast.error('Product stock limited')
        const qty = quantity + 1
        setQuantity(qty)
    }

    const decreaseQuantity = () => {
        if (1 >= quantity) return
        const qty = quantity - 1
        setQuantity(qty)
    }

    console.log('productDetails', product)
    // console.log('productName', product.name)
    return (
        <div className="detail-product-page">
            <div class="bg-main">
                <div class="container">
                    <div class="box">
                        <div class="breadcumb">
                            <Link to="/">home</Link>
                            <span>
                                <i class="bx bxs-chevrons-right"></i>
                            </span>
                            <Link to="/products">all products</Link>
                            <span>
                                <i class="bx bxs-chevrons-right"></i>
                            </span>
                            <Link to="">{product.name}</Link>
                        </div>
                    </div>
                    <div class="row product-row">
                        <div class="col-5 col-md-12">
                            <div class="product-img" id="product-img">
                                {product.images &&
                                    product.images.map((image, i) => (
                                        <img
                                            src={image.url}
                                            key={i}
                                            alt={`${i} Slide`}
                                        />
                                    ))}
                            </div>
                            <div class="box">
                                <div class="product-img-list">
                                    <div class="product-img-item">
                                        {/* <img
                                            src={product.images[0].url}
                                            alt={product.name}
                                        /> */}
                                    </div>
                                    <div class="product-img-item">
                                        {/* <img
                                            src={product.images[0].url}
                                            alt={product.name}
                                        /> */}
                                    </div>
                                    <div class="product-img-item">
                                        {/* <img
                                            src={product.images[0].url}
                                            alt={product.name}
                                        /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-7 col-md-12">
                            <div class="product-info">
                                <h1>{product.name}</h1>
                                <div class="product-info-detail">
                                    <span class="product-info-detail-title">
                                        Brand:
                                    </span>
                                    <Link
                                        to=""
                                        class="product-info-detail-category"
                                    >
                                        {product.category}
                                    </Link>
                                </div>
                                <div class="product-info-detail">
                                    <span class="product-info-detail-title">
                                        Rated:
                                    </span>
                                    <Rate
                                        allowHalf
                                        disabled
                                        defaultValue={product.ratings}
                                        style={{ padding: '0 10px' }}
                                    />
                                    ({product.numOfReviews} Reviews)
                                </div>
                                <p class="product-description">
                                    {product.description}
                                </p>
                                <div class="product-info-price">
                                    {product.price}
                                </div>
                                <div class="product-quantity-wrapper">
                                    <button
                                        className="product-quantity-btn"
                                        onClick={decreaseQuantity}
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={quantity}
                                        className="product-quantity-input"
                                    />
                                    <button
                                        className="product-quantity-btn"
                                        onClick={increaseQuantity}
                                    >
                                        +
                                    </button>
                                </div>
                                <div
                                    // class="product-info-btn"
                                    style={{ display: 'flex' }}
                                >
                                    <div style={{ padding: '0 10px 0 0' }}>
                                        <button class="btn-flat btn-hover">
                                            Thêm Yêu thích
                                        </button>
                                    </div>
                                    <div style={{ padding: '0 0 0 10px' }}>
                                        <button class="btn-flat btn-hover">
                                            Thêm Giỏ Hàng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="box-header">description</div>
                        <div class="product-detail-description">
                            <button
                                class="btn-flat btn-hover btn-view-description"
                                id="view-all-description"
                            >
                                view all
                            </button>
                            <div class="product-detail-description-content">
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="box-header">review</div>
                        <div>
                            {product.reviews &&
                                product.reviews.map((review, i) => (
                                    <div class="user-rate">
                                        <div class="user-info">
                                            <div class="user-avt">
                                                <img src="" key={i} alt="" />
                                            </div>
                                            <div class="user-name">
                                                <span class="name">
                                                    {review.name}
                                                </span>
                                                <span class="rating">
                                                    <Rate
                                                        disabled
                                                        defaultValue={
                                                            review.rating
                                                        }
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div class="user-rate-content">
                                            {review.comment}
                                        </div>
                                    </div>
                                ))}

                            <div class="box">
                                <ul class="pagination">
                                    <li>
                                        <Link to="">
                                            <i class="bx bxs-chevron-left"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">1</Link>
                                    </li>
                                    <li>
                                        <Link to="">2</Link>
                                    </li>
                                    <li>
                                        <Link to="">3</Link>
                                    </li>
                                    <li>
                                        <Link to="">4</Link>
                                    </li>
                                    <li>
                                        <Link to="">5</Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i class="bx bxs-chevron-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="box-header">related products</div>
                        <div class="row" id="related-products"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProductPage
