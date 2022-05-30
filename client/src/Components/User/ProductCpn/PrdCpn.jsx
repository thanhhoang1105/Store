import React, { useEffect } from 'react'
import { Card, Avatar, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

import {
    getProduct,
    clearErrors,
    getProductDetails
} from '../../../Redux/Actions/ProductAction'
import Formatter from '../More/Formatter'

const { Meta } = Card

const PrdCpn = () => {
    const dispatch = useDispatch()
    const { products, error, loading } = useSelector(state => state.products)

    useEffect(() => {
        if (error) {
            message.error(error)
            dispatch(clearErrors())
        }
        dispatch(getProduct())
    }, [dispatch, error])
    // console.log('product', products)

    return (
        <div
            style={{
                display: 'flex',
                padding: '0px 0px 10px 0px',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}
        >
            {products.reverse().map((product, i) => (
                <div style={{ padding: '0px 10px 20px 10px' }} key={i}>
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
                                    style={{
                                        height: '260px',
                                        objectFit: 'cover'
                                    }}
                                />
                            }
                        >
                            <Meta
                                title={product.name}
                                description={Formatter.format(product.price)}
                            />
                        </Card>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default PrdCpn
