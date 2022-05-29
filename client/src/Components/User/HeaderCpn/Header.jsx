import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { message } from 'antd'

import { logout } from '../../../Redux/Actions/UserAction'
import { clearErrors, getProduct } from '../../../Redux/Actions/ProductAction'

const Header = () => {
    const dispatch = useDispatch()

    const { user } = useSelector(state => state.user)
    // const { loading, error, user } = user
    const { products, error, loading } = useSelector(state => state.products)

    const [keyword, setKeyword] = useState('')

    // console.log('keyword', keyword)
    useEffect(() => {
        if (error) {
            message.error(error)
            dispatch(clearErrors())
        }
        dispatch(getProduct(keyword))
    }, [dispatch, keyword, error])

    const handleLogout = () => {
        dispatch(logout())
        message.success('Logout Successfully')
    }

    // console.log('user', user?.name)

    return (
        <div className="header">
            <header>
                {/* mobile menu */}
                <div className="mobile-menu bg-second">
                    <Link to="/" className="mb-logo">
                        NTShop
                    </Link>
                    <span className="mb-menu-toggle" id="mb-menu-toggle">
                        <i className="bx bx-menu"></i>
                    </span>
                </div>

                {/* main header  */}
                <div className="header-wrapper" id="header-wrapper">
                    <span
                        className="mb-menu-toggle mb-menu-close"
                        id="mb-menu-close"
                    >
                        <i className="bx bx-x"></i>
                    </span>
                    {/* top header  */}
                    <div className="bg-second">
                        <div className="top-header container">
                            <ul className="devided">
                                <li>
                                    <Link to="/">+840123456789</Link>
                                </li>
                                <li>
                                    <Link to="/">atshop@mail.com</Link>
                                </li>
                            </ul>
                            <ul className="devided">
                                <li className="dropdown">
                                    <Link to="/">USD</Link>
                                    <i className="bx bxs-chevron-down"></i>
                                    <ul className="dropdown-content">
                                        <li>
                                            <Link to="/">VND</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to="/">ENGLISH</Link>
                                    <i className="bx bxs-chevron-down"></i>
                                    <ul className="dropdown-content">
                                        <li>
                                            <Link to="/">VIETNAMESE</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/orders">ORDER TRACKING</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* end top header  */}
                    {/* mid header  */}
                    <div className="bg-main">
                        <div className="mid-header container">
                            <Link to="/" className="logo">
                                NTShop
                            </Link>
                            <div className="search">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="search-input"
                                    onChange={e => setKeyword(e.target.value)}
                                />
                                <i className="bx bx-search-alt"></i>
                            </div>
                            <ul className="user-menu">
                                <li>
                                    <Link to="/">
                                        <i className="bx bx-heart"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cart">
                                        <i className="bx bx-cart"></i>
                                    </Link>
                                </li>
                                {user ? (
                                    <>
                                        <li>
                                            <Link to="/profile">
                                                <i className="bx bx-user-circle"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={handleLogout}>
                                                <i className="bx bx-log-in"></i>
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link to="/auth">
                                                <i className="bx bx-user-circle"></i>
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                    {/* end mid header  */}
                    {/* bottom header  */}
                    <div className="bg-second">
                        <div className="bottom-header container">
                            <ul className="main-menu">
                                <li>
                                    <Link to="/">home</Link>
                                </li>
                                <li>
                                    <Link to="/products">products</Link>
                                </li>
                                {/* mega menu  */}
                                <li className="mega-dropdown">
                                    <a href="./products.html">
                                        Shop
                                        <i className="bx bxs-chevron-down"></i>
                                    </a>
                                    <div className="mega-content">
                                        <div className="row">
                                            <div className="col-3 col-md-12">
                                                <div className="box">
                                                    <h3>Categories</h3>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Wireless
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Inear headphone
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Overear
                                                                headphone
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                sport headphone
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-12">
                                                <div className="box">
                                                    <h3>Categories</h3>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Wireless
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Inear headphone
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Overear
                                                                headphone
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                sport headphone
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-12">
                                                <div className="box">
                                                    <h3>Categories</h3>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Wireless
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Inear headphone
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Overear
                                                                headphone
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                sport headphone
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-12">
                                                <div className="box">
                                                    <h3>Categories</h3>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Wireless
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Inear headphone
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Overear
                                                                headphone
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                sport headphone
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row img-row">
                                            <div className="col-3">
                                                <div className="box">
                                                    <img src="" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="box">
                                                    <img src="" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="box">
                                                    <img src="" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="box">
                                                    <img src="" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* end mega menu  */}
                                <li>
                                    <Link to="/">blog</Link>
                                </li>
                                <li>
                                    <Link to="/">contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* end bottom header  */}
                </div>
                {/* end main header  */}
            </header>
        </div>
    )
}

export default Header
