import React from 'react'

import TopCartCpn from '../../../Components/User/CartCpn/TopCartCpn'
import CheckoutCpn from '../../../Components/User/CartCpn/CheckoutCpn'

const CartPage = () => {
    // console.log('CartPage', cartItems)

    return (
        <div className="background__color">
            <TopCartCpn />
            <CheckoutCpn />
        </div>
    )
}

export default CartPage
