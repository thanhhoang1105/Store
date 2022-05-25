import React from 'react'
import BestSelling from '../../../Components/User/ProductCpn/BestSelling'
import Product from '../../../Components/User/ProductCpn/Product'

import Slider from '../../../Components/User/SliderCpn/Slider'

const HomePage = () => {
    window.scrollTo({ top: 0 })
    return (
        <div>
            <Slider />
            <Product />
            <BestSelling />
        </div>
    )
}

export default HomePage
