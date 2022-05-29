import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import {
    clearErrors,
    getOrderDetails
} from '../../../Redux/Actions/OrderAction'
import './style.scss'

import Image1 from '../../../Assets/Images/1.png'

const TrackingOrderDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    const { order, loading, error } = useSelector(state => state.myOrderDetails)

    console.log('id: ', id)
    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        dispatch(getOrderDetails(id))
    }, [dispatch, error, id])

    console.log('order: ', order)

    return (
        <div className="Order container">
            <div className="Order__header">
                <div className="Order__header__left">
                    <div className="Order__header__left__orderId">
                        Đơn hàng {/* #{order._id} */}
                    </div>
                    <div className="Order__header__left__orderId">
                        jhjdfsdfd
                    </div>
                </div>
                <div className="Order__header__right">
                    <div className="Order__header__right__status">
                        Giao Hàng Thành công
                    </div>
                    <div className="Order__header__right__review">
                        Đã đánh giá
                    </div>
                </div>
            </div>
            <div className="Order__body">
                <div className="Order__body__left">
                    <div className="Order__body__left__info">
                        <div className="Order__body__left__info__image">
                            <img
                                src={Image1}
                                alt=""
                                style={{ width: '150px' }}
                            />
                        </div>
                        <div className="Order__body__left__info__name">
                            <div className="Order__body__left__info__name__title">
                                ĐÈN KẸP BÀN PIXAR-Bóng LED CHỐNG CẬN FSL 6W
                                CHÍNH HÃNG
                            </div>
                            <div className="Order__body__left__info__name__content">
                                Phân loại hàng:ĐÈN
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Order__body__right">
                    <div className="Order__body__right__info">
                        <div className="Order__body__right__info__price">
                            149.000 đ
                        </div>
                    </div>
                </div>
            </div>
            <div className="Order__footer"></div>
        </div>
    )
}

export default TrackingOrderDetail
