import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { message } from 'antd'

import PrdCpn from '../../../Components/User/ProductCpn/PrdCpn'
import { clearErrors } from '../../../Redux/Actions/ProductAction'
import { getProduct } from '../../../Redux/Actions/ProductAction'

const ProductPage = () => {
    window.scrollTo({ top: 0 })
    const dispatch = useDispatch()
    const { categories, error, loading } = useSelector(
        state => state.categories
    )

    const { products, productsCount, resultPerPage } = useSelector(
        state => state.products
    )

    const [currentPage, setCurrentPage] = useState(1)
    // const [category, setCategory] = useState('')

    // const keyword = match.params.keyword

    const setCurrentPageNo = e => {
        setCurrentPage(e)
    }

    // useEffect(() => {
    //     if (error) {
    //         message.error(error)
    //         dispatch(clearErrors())
    //     }
    //     // dispatch(getProduct(keyword, currentPage, category))
    // }, [dispatch, keyword, currentPage, category, error])

    // console.log('category', category)
    console.log('categories', categories)

    return (
        <div className="bg-main">
            <div className="container-1">
                <div className="box">
                    <div className="breadcumb">
                        <Link to="">home</Link>
                        <span>
                            <i className="bx bxs-chevrons-right"></i>
                        </span>
                        <Link to="">all products</Link>
                    </div>
                </div>
                <div className="box">
                    <div className="row">
                        <div className="col-2-5 filter-col" id="filter-col">
                            <div className="box filter-toggle-box">
                                <button
                                    className="btn-flat btn-hover"
                                    id="filter-close"
                                >
                                    close
                                </button>
                            </div>
                            <div className="box">
                                <span className="filter-header">
                                    Categories
                                </span>
                                <ul className="filter-list">
                                    {categories.map(category => (
                                        <li key={category._id}>
                                            <Link
                                                to={`/products/${category.name}`}
                                            >
                                                {category.name}
                                            </Link>
                                        </li>
                                    ))}
                                    {/* {categories.map((category, i) => (
                                        <li
                                            key={i}
                                            // onClick={() =>
                                            //     setCategory(category)
                                            // }
                                        >
                                            <Link to="">{category}</Link>
                                        </li>
                                    ))} */}
                                </ul>
                            </div>

                            {/* <div className="box">
                                <span className="filter-header"> Brands </span>
                                <ul className="filter-list">
                                    <li>
                                        <div className="group-checkbox">
                                            <input
                                                type="checkbox"
                                                id="remember1"
                                                checked="checked"
                                            />
                                            <label for="remember1">
                                                JBL
                                                <i className="bx bx-check"></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input
                                                type="checkbox"
                                                id="remember2"
                                            />
                                            <label for="remember2">
                                                Beat
                                                <i className="bx bx-check"></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input
                                                type="checkbox"
                                                id="remember3"
                                            />
                                            <label for="remember3">
                                                Logitech
                                                <i className="bx bx-check"></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input
                                                type="checkbox"
                                                id="remember4"
                                            />
                                            <label for="remember4">
                                                Samsung
                                                <i className="bx bx-check"></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input
                                                type="checkbox"
                                                id="remember5"
                                            />
                                            <label for="remember5">
                                                Sony
                                                <i className="bx bx-check"></i>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                                <span className="filter-header"> Colors </span>
                                <ul className="filter-list">
                                    <li>
                                        <div className="group-checkbox">
                                            <input
                                                type="checkbox"
                                                id="remember1"
                                            />
                                            <label for="remember1">
                                                Red
                                                <i className="bx bx-check"></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input
                                                type="checkbox"
                                                id="remember2"
                                            />
                                            <label for="remember2">
                                                Blue
                                                <i className="bx bx-check"></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input
                                                type="checkbox"
                                                id="remember3"
                                            />
                                            <label for="remember3">
                                                White
                                                <i className="bx bx-check"></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input
                                                type="checkbox"
                                                id="remember4"
                                            />
                                            <label for="remember4">
                                                Pink
                                                <i className="bx bx-check"></i>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="group-checkbox">
                                            <input
                                                type="checkbox"
                                                id="remember5"
                                            />
                                            <label for="remember5">
                                                Yellow
                                                <i className="bx bx-check"></i>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="col-9-5 col-md-12">
                            <div className="box filter-toggle-box">
                                <button
                                    className="btn-flat btn-hover"
                                    id="filter-toggle"
                                >
                                    filter
                                </button>
                            </div>
                            <div className="box-1">
                                <div className="row" id="products">
                                    <PrdCpn />
                                </div>
                            </div>
                            <div className="box">
                                <ul className="pagination">
                                    <li>
                                        <Link to="">
                                            <i className="bx bxs-chevron-left"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className="active">
                                            1
                                        </Link>
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
                                            <i className="bx bxs-chevron-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
