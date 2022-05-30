import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { message, Input, Select } from 'antd'

import {
    createProduct,
    getAdminProduct,
    getProductDetails,
    deleteProduct,
    clearErrors
} from '../../../Redux/Actions/ProductAction'

const { Option } = Select

const ProductCpn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { products, loading, error } = useSelector(state => state.products)
    const { success } = useSelector(state => state.createProduct)

    const { categories } = useSelector(state => state.categories)
    const { product } = useSelector(state => state.productDetails)
    const { isDeleted } = useSelector(state => state.deleteProduct)

    console.log('product', success)

    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [category, setCategory] = useState('')

    console.log('category', category)

    const [images, setImages] = useState('')
    const [imagePreview, setImagePreview] = useState(
        'https://res.cloudinary.com/shopecommerceonline/image/upload/v1653122947/shoe/24-248253_user-profile-default-image-png-clipart-png-download_vkwpfv.png'
    )

    useEffect(() => {
        if (product) {
            setName(product.name)
            setDescription(product.description)
            setPrice(product.price)
            setStock(product.stock)
            setCategory(product.category)
            setImages(product.images)
        }
        if (success) {
            message.success('Product added successfully')
            dispatch({ type: 'NEW_PRODUCT_RESET', payload: null })
            setOpen1(false)
            dispatch(getAdminProduct())
        }
        if (isDeleted) {
            message.success('Product Deleted Successfully')
            dispatch({ type: 'DELETE_PRODUCT_RESET', payload: null })
            dispatch(getAdminProduct())
        }
        if (error) {
            message.error(error)
            dispatch(clearErrors())
        }
    }, [product, error, dispatch, isDeleted, success])

    // console.log('name', name)

    const updateProfileDataChange = e => {
        const reader = new FileReader()

        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagePreview(reader.result)
                setImages(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const handleSubmitProduct = e => {
        e.preventDefault()

        const updateProductInfo = {
            name,
            description,
            price,
            stock,
            category,
            images
        }

        dispatch(createProduct(updateProductInfo))
    }

    const handleEdit = id => {
        window.location.href = `/admin/products/edit/${id}`
    }

    const handleDelete = id => {
        dispatch(deleteProduct(id))
    }

    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Products</h2>
                <div>
                    <Link
                        to=""
                        className="btn btn-primary"
                        onClick={() => setOpen1(true)}
                    >
                        Create new
                    </Link>
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <header className="card-header bg-white ">
                    <div className="row gx-3 py-3">
                        <div className="col-lg-4 col-md-6 me-auto ">
                            <input
                                type="search"
                                placeholder="Search..."
                                className="form-control p-2"
                            />
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>All category</option>
                                <option>Electronics</option>
                                <option>Clothings</option>
                                <option>Something else</option>
                            </select>
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>Latest added</option>
                                <option>Cheap first</option>
                                <option>Most viewed</option>
                            </select>
                        </div>
                    </div>
                </header>

                <div className="card-body">
                    <div className="row">
                        {/* Products */}
                        {products.map(product => (
                            <div className="col-md-6 col-sm-6 col-lg-3 mb-4">
                                <div className="card card-product-grid shadow-sm">
                                    {product.images.map(img => (
                                        <Link to="" className="img-wrap">
                                            <img src={img.url} alt="Product" />
                                        </Link>
                                    ))}

                                    <div className="info-wrap">
                                        <Link
                                            to="#"
                                            className="title text-truncate"
                                        >
                                            {product.name}
                                        </Link>
                                        <div className="price mb-2">
                                            ${product.price}
                                        </div>
                                        <div className="row">
                                            <Link
                                                to={``}
                                                className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
                                                onClick={() =>
                                                    handleEdit(product._id)
                                                }
                                            >
                                                <i className="fas fa-pen"></i>
                                            </Link>
                                            <Link
                                                to=""
                                                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
                                                onClick={() =>
                                                    handleDelete(product._id)
                                                }
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <nav
                        className="float-end mt-4"
                        aria-label="Page navigation"
                    >
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <Link className="page-link" to="#">
                                    Previous
                                </Link>
                            </li>
                            <li className="page-item active">
                                <Link className="page-link" to="#">
                                    1
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    2
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    3
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    Next
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {open1 && (
                <>
                    <div className="details-modal-overlay"></div>
                    <div
                        className="details-modal"
                        style={{ marginTop: '150px' }}
                    >
                        <div className="details-modal-title">
                            <h1>Thêm sản phẩm</h1>
                            <button
                                type="button"
                                className="details-modal-close"
                                onClick={() => setOpen1(false)}
                            >
                                X
                            </button>
                        </div>

                        <div className="details-modal-content">
                            <form onSubmit={handleSubmitProduct}>
                                <div className="form-group">
                                    <label htmlFor="email">Tên Sản Phẩm</label>
                                    <Input
                                        defaultValue={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Mô tả</label>
                                    <Input
                                        defaultValue={description}
                                        onChange={e =>
                                            setDescription(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Giá</label>
                                    <Input
                                        defaultValue={price}
                                        onChange={e => setPrice(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Số lượng</label>
                                    <Input
                                        defaultValue={stock}
                                        onChange={e => setStock(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Danh mục</label>
                                    <Select
                                        defaultValue="Chọn Danh mục"
                                        style={{
                                            width: '100%'
                                        }}
                                        onChange={e => setCategory(e)}
                                    >
                                        {categories.map((item, index) => (
                                            <Option
                                                key={index}
                                                value={item.name}
                                            >
                                                {item.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="form-group">
                                    <div className="updateProfileImage">
                                        <div className="avatar-preview">
                                            <img
                                                src={imagePreview}
                                                alt="Avatar Preview"
                                            />
                                        </div>
                                        <div className="upload-preview">
                                            <input
                                                type="file"
                                                name="avatar"
                                                accept="image/*"
                                                style={{
                                                    width: '100%',
                                                    fontSize: '15px'
                                                }}
                                                onChange={
                                                    updateProfileDataChange
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
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
            {open2 && (
                <>
                    <div className="details-modal-overlay"></div>
                    <div
                        className="details-modal"
                        style={{ marginTop: '150px' }}
                    >
                        <div className="details-modal-title">
                            <h1>Sửa sản phẩm</h1>
                            <button
                                type="button"
                                className="details-modal-close"
                                onClick={() => setOpen2(false)}
                            >
                                X
                            </button>
                        </div>

                        <div className="details-modal-content">
                            <form onSubmit={handleSubmitProduct}>
                                <div className="form-group">
                                    <label htmlFor="email">Tên Sản Phẩm</label>
                                    <Input
                                        defaultValue={product.name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Mô tả</label>
                                    <Input
                                        defaultValue={product.description}
                                        onChange={e =>
                                            setDescription(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Giá</label>
                                    <Input
                                        defaultValue={price}
                                        onChange={e => setPrice(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Số lượng</label>
                                    <Input
                                        defaultValue={stock}
                                        onChange={e => setStock(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Danh mục</label>
                                    <Select
                                        defaultValue="Chọn Danh mục"
                                        style={{
                                            width: '100%'
                                        }}
                                        onChange={e => setCategory(e)}
                                    >
                                        {categories.map((item, index) => (
                                            <Option
                                                key={index}
                                                value={item.name}
                                            >
                                                {item.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="form-group">
                                    <div className="updateProfileImage">
                                        <div className="avatar-preview">
                                            <img
                                                src={imagePreview}
                                                alt="Avatar Preview"
                                            />
                                        </div>
                                        <div className="upload-preview">
                                            <input
                                                type="file"
                                                name="avatar"
                                                accept="image/*"
                                                style={{
                                                    width: '100%',
                                                    fontSize: '15px'
                                                }}
                                                onChange={
                                                    updateProfileDataChange
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="button-group">
                                    <button
                                        onClick={() => setOpen2(false)}
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
        </section>
    )
}

export default ProductCpn
