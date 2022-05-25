import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            {/* footer  */}
            <footer class="bg-second">
                <div class="container">
                    <div class="row">
                        <div class="col-3 col-md-6">
                            <h3 class="footer-head">Products</h3>
                            <ul class="menu">
                                <li>
                                    <Link to="/"> Help center</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact us</Link>
                                </li>
                                <li>
                                    <Link to="/">product help</Link>
                                </li>
                                <li>
                                    <Link to="/">warranty</Link>
                                </li>
                                <li>
                                    <Link to="/">order status</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-3 col-md-6">
                            <h3 class="footer-head">services</h3>
                            <ul class="menu">
                                <li>
                                    <Link to="/">Help center</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact us</Link>
                                </li>
                                <li>
                                    <Link to="/">product help</Link>
                                </li>
                                <li>
                                    <Link to="/">warranty</Link>
                                </li>
                                <li>
                                    <Link to="/">order status</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-3 col-md-6">
                            <h3 class="footer-head">support</h3>
                            <ul class="menu">
                                <li>
                                    <Link to="/">Help center</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact us</Link>
                                </li>
                                <li>
                                    <Link to="/">product help</Link>
                                </li>
                                <li>
                                    <Link to="/">warranty</Link>
                                </li>
                                <li>
                                    <Link to="/">order status</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-3 col-md-6 col-sm-12">
                            <div class="contact">
                                <h3 class="contact-header">ATShop</h3>
                                <ul class="contact-socials">
                                    <li>
                                        <Link to="/">
                                            <i class="bx bxl-facebook-circle"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i class="bx bxl-instagram-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i class="bx bxl-youtube"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i class="bx bxl-twitter"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <div class="subscribe">
                                <input
                                    type="email"
                                    placeholder="ENTER YOUR EMAIL"
                                />
                                <button>subscribe</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
            {/* end footer  */}
        </div>
    )
}

export default Footer
