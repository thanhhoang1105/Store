import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
    getProductDetails,
    clearErrors
} from '../../../Redux/Actions/ProductAction'

const DetailProductPage = () => {
    window.scrollTo({ top: 0 })
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

    console.log('productDetails', product)
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
                                    <Link to="">{product.category}</Link>
                                </div>
                                <div class="product-info-detail">
                                    <span class="product-info-detail-title">
                                        Rated:
                                    </span>
                                    <span class="rating">
                                        {product.ratings}
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                    </span>
                                </div>
                                <p class="product-description">
                                    {product.description}
                                </p>
                                <div class="product-info-price">
                                    {product.price}
                                </div>
                                <div class="product-quantity-wrapper">
                                    <span class="product-quantity-btn">
                                        <i class="bx bx-minus"></i>
                                    </span>
                                    <span class="product-quantity">1</span>
                                    <span class="product-quantity-btn">
                                        <i class="bx bx-plus"></i>
                                    </span>
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
                                {/* <img
                                    src="./images/JBL_Quantum_400_Product Image_Hero 02.png"
                                    alt=""
                                />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nobis accusantium officia,
                                    quae fuga in exercitationem aliquam labore
                                    ex doloribus repellendus beatae facilis
                                    ipsam. Veritatis vero obcaecati iste atque
                                    aspernatur ducimus. Lorem ipsum dolor sit,
                                    amet consectetur adipisicing elit. Repellat
                                    quam praesentium id sit amet magnam ad,
                                    dolorum, cumque iste optio itaque expedita
                                    eius similique, ab adipisci dicta. Quod,
                                    quibusdam quas. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Odit, in
                                    corrupti ipsam sint error possimus commodi
                                    incidunt suscipit sit voluptatum quibusdam
                                    enim eligendi animi deserunt recusandae
                                    earum natus voluptas blanditiis?
                                </p>
                                <img
                                    src="./images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png"
                                    alt=""
                                />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Modi ullam quam fugit
                                    veniam ipsum recusandae incidunt, ex
                                    ratione, magnam labore ad tenetur officia!
                                    In, totam. Molestias sapiente deserunt animi
                                    porro?
                                </p> */}
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
                                                    {review.rating}
                                                    <i class="bx bxs-star"></i>
                                                    <i class="bx bxs-star"></i>
                                                    <i class="bx bxs-star"></i>
                                                    <i class="bx bxs-star"></i>
                                                    <i class="bx bxs-star"></i>
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
                                        <a href="#">
                                            <i class="bx bxs-chevron-left"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="active">
                                            1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">2</a>
                                    </li>
                                    <li>
                                        <a href="#">3</a>
                                    </li>
                                    <li>
                                        <a href="#">4</a>
                                    </li>
                                    <li>
                                        <a href="#">5</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="bx bxs-chevron-right"></i>
                                        </a>
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
