import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Input, message } from 'antd'

import {
    deleteCategory,
    getCategories
} from '../../../Redux/Actions/CategoryAction'

import './categoryTable.css'

const CategoryTable = () => {
    const dispatch = useDispatch()
    const { categories, error, loading } = useSelector(
        state => state.categories
    )
    const { success } = useSelector(state => state.createCategory)

    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)

    useEffect(() => {
        if (error) {
            message.error(error)
        }
        if (success) {
            message.success('Tạo thành công')
            dispatch({ type: 'NEW_CATEGORY_RESET' })
            dispatch(getCategories())
        }
    }, [dispatch, error, loading, success])

    const handleDeleteCategory = id => {
        dispatch(deleteCategory(id))
        message.success('Xóa thành công')
    }

    // console.log('categories', categories)
    return (
        <div className="col-md-12 col-lg-8">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th className="text-end">Action</th>
                    </tr>
                </thead>
                {/* Table Data */}
                <tbody>
                    {categories.map(category => (
                        <tr key={category._id}>
                            <td>
                                <b>{category.name}</b>
                            </td>
                            <td>{category.description}</td>
                            <td className="text-end">
                                <div className="actions">
                                    <Link to="#" onClick={() => setOpen1(true)}>
                                        <i className="fas fa-pen"></i>
                                    </Link>
                                    <Link
                                        className="text-danger"
                                        to="#"
                                        onClick={e =>
                                            handleDeleteCategory(category._id)
                                        }
                                    >
                                        <i className="fas fa-trash-alt"></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {open1 && (
                <>
                    <div className="details-modal-overlay"></div>
                    <div className="details-modal">
                        <div className="details-modal-title">
                            <h1>Cập nhật thông tin cá nhân</h1>
                            <button
                                type="button"
                                className="details-modal-close"
                                onClick={() => setOpen1(false)}
                            >
                                X
                            </button>
                        </div>

                        <div className="details-modal-content">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Input
                                    // prefix={<MailOutlined />}
                                    // defaultValue={email}
                                    // onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Tên</label>
                                    <Input
                                    // prefix={<UserOutlined />}
                                    // defaultValue={name}
                                    // onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Địa Chỉ</label>
                                    <Input
                                    // prefix={<HeatMapOutlined />}
                                    // defaultValue={address}
                                    // onChange={e =>
                                    //     setAddress(e.target.value)
                                    // }
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Điện Thoại</label>
                                    <Input
                                    // prefix={<PhoneOutlined />}
                                    // defaultValue={phoneNo}
                                    // onChange={e =>
                                    //     setPhoneNo(e.target.value)
                                    // }
                                    />
                                </div>

                                {/* <ImgCrop rotate>
                                        <Upload
                                            action="https://nt-store.herokuapp.com/api/v1/me/update/profile"
                                            listType="picture-card"
                                            fileList={fileList}
                                            onChange={onChange}
                                            onPreview={onPreview}
                                        >
                                            {fileList.length < 1.5 &&
                                                '+ Upload'}
                                        </Upload>
                                    </ImgCrop> */}
                                <div className="button-group">
                                    <button
                                        onClick={() => setOpen1(false)}
                                        className="btn-outline"
                                        type="button"
                                    >
                                        Đóng
                                    </button>
                                    <button
                                        className="btn-primary"
                                        type="submit"
                                    >
                                        Lưu thay đổi
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CategoryTable
