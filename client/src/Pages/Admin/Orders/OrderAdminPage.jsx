import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { FaTrash, FaEye, FaPen } from 'react-icons/fa'

import { getAllOrders } from '../../../Redux/Actions/OrderAction'

const { Column, ColumnGroup } = Table

const OrderAdminPage = () => {
    const dispatch = useDispatch()

    const { orders, loading, error } = useSelector(state => state.AllOrders)

    // useEffect(() => {
    //     dispatch(getAllOrders())
    // })

    console.log('orders', orders)

    return (
        <div className="MainDash_Order">
            <h1 className="h1">Order</h1>
            <Table dataSource={orders}>
                <Column title="ID" dataIndex="_id" key="_id" />
                <Column
                    title="Trạng Thái"
                    dataIndex="orderStatus"
                    key="orderStatus"
                />
                <Column
                    title="Số Lượng"
                    dataIndex="orderItems"
                    key="orderItems"
                    render={orderItems => orderItems.length}
                />
                <Column
                    title="Tổng Tiền"
                    dataIndex="{Formatter.format(totalPrice)}"
                    key="totalPrice"
                />
                <Column
                    title="Action"
                    key="action"
                    render={(_, record) => (
                        <Space size="middle">
                            <Link to={``}>
                                <FaPen
                                    style={{
                                        fontSize: '20px',
                                        color: 'orange'
                                    }}
                                />
                            </Link>
                            <Link to={`/orders/${record._id}`}>
                                <FaEye
                                    style={{ fontSize: '20px', color: 'teal' }}
                                />
                            </Link>
                            <Link to={``}>
                                <FaTrash
                                    style={{ fontSize: '20px', color: 'red' }}
                                />
                            </Link>
                        </Space>
                    )}
                />
            </Table>
        </div>
    )
}

export default OrderAdminPage
