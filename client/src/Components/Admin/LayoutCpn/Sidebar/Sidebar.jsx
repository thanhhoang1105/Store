import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <aside className="navbar-aside" id="offcanvas_aside">
                <div className="aside-top">
                    <Link to="/admin" className="brand-wrap">
                        <img
                            src="/images/logo.png"
                            style={{ height: '46' }}
                            className="logo"
                            alt="Dashboard"
                        />
                    </Link>
                    <div>
                        <button className="btn btn-icon btn-aside-minimize">
                            <i className="text-muted fas fa-stream"></i>
                        </button>
                    </div>
                </div>

                <nav>
                    <ul className="menu-aside">
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/admin/"
                                exact={true}
                            >
                                <i className="icon fas fa-home"></i>
                                <span className="text">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/admin/products"
                            >
                                <i className="icon fas fa-shopping-bag"></i>
                                <span className="text">Products</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/admin/categories"
                            >
                                <i className="icon fas fa-list"></i>
                                <span className="text">Categories</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/admin/orders"
                            >
                                <i className="icon fas fa-bags-shopping"></i>
                                <span className="text">Orders</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/admin/users"
                            >
                                <i className="icon fas fa-user"></i>
                                <span className="text">Users</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/admin/slides"
                            >
                                <i className="icon fas fa-store-alt"></i>
                                <span className="text">Slides</span>
                            </NavLink>
                        </li>
                    </ul>
                    <br />
                    <br />
                </nav>
            </aside>
        </div>
    )
}

export default Sidebar
