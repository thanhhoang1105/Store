import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Tag } from 'antd'
import { Link } from 'react-router-dom'

import Formatter from '../../../Components/User/More/Formatter'
const { Column, ColumnGroup } = Table

const TrackingOrderPage = () => {
    const dispatch = useDispatch()

    const { orders, loading, error } = useSelector(state => state.myOrder)

    // console.log('TrackingOrderPage', orders[0].orderItems.length)

    return (
        <>
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
                            <Link to={`/orders/${record._id}`}>Xem</Link>
                            {/* <a href=''>Xem {record.lastName}</a> */}
                        </Space>
                    )}
                />
            </Table>
        </>
    )
}

export default TrackingOrderPage
