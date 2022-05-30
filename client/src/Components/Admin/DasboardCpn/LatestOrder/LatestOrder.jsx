import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Formatter from '../../../User/More/Formatter'

const LatestOrder = props => {
    const { loading, error, orders } = props
    return (
        <div className="card-body">
            <h4 className="card-title">New orders</h4>
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        {orders.slice(0, 5).map(order => (
                            <tr key={order._id}>
                                <td>
                                    <b>{order.shippingInfo.name}</b>
                                </td>
                                <td>{order.shippingInfo.email}</td>
                                <td>{Formatter.format(order.totalPrice)}</td>
                                <td>{order.paymentInfo}</td>
                                {/* <td>
                                    {order.isPaid ? (
                                        <span className="badge rounded-pill alert-success">
                                            Paid At{' '}
                                            {moment(order.paidAt).format(
                                                'MMM Do YY'
                                            )}
                                        </span>
                                    ) : (
                                        <span className="badge rounded-pill alert-danger">
                                            Not Paid
                                        </span>
                                    )}
                                </td> */}
                                <td>{moment(order.createdAt).calendar()}</td>
                                <td className="d-flex justify-content-end align-item-center">
                                    <Link
                                        to={`/order/${order._id}`}
                                        className="text-success"
                                    >
                                        <i className="fas fa-eye"></i>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LatestOrder
