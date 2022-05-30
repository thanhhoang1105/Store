import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { FaTrash, FaEye, FaPen } from 'react-icons/fa'

// import { getAllUsers } from '../../../Redux/Actions/UserAction'
import './style.css'

const { Column, ColumnGroup } = Table

const UserAdminPage = () => {
    const dispatch = useDispatch()

    const { users, loading, error } = useSelector(state => state.allUsers)

    // useEffect(() => {
    //     dispatch(getAllUsers())
    // })

    console.log('users', users)

    return (
        <div className="MainDash_User">
            <h1 className="h1">User</h1>
            <Table dataSource={users}>
                <Column title="ID" dataIndex="_id" key="_id" />
                <Column title="Tên" dataIndex="name" key="name" />
                <Column
                    title="Email"
                    dataIndex="email"
                    key="email"
                    // render={orderItems => orderItems.length}
                />
                <Column title="Quyền" dataIndex="role" key="role" />
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

export default UserAdminPage
