import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
    getProductDetails,
    updateProduct,
    clearErrors
} from '../../../Redux/Actions/ProductAction'

const EditProduct = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    const { product, loading, error } = useSelector(
        state => state.productDetails
    )

    // console.log('products', product)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [stock, setStock] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        dispatch(getProductDetails(id))
    }, [dispatch, error, id])

    const submitHandler = e => {
        e.preventDefault()
        dispatch(
            updateProduct(id, {
                name: name,
                price: price,
                image: image,
                stock: stock,
                description: description
            })
        )
    }

    return (
        <section className="content-main" style={{ maxWidth: '1200px' }}>
            <form onSubmit={submitHandler}>
                <div className="content-header">
                    <h2 className="content-title">Update Product</h2>
                </div>

                <div className="row mb-4" style={{ justifyContent: 'center' }}>
                    <div className="col-xl-8 col-lg-8">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <div className="mb-4">
                                    <label
                                        htmlFor="product_title"
                                        className="form-label"
                                    >
                                        Product title
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Type here"
                                        className="form-control"
                                        id="product_title"
                                        required
                                        value={product.name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="product_price"
                                        className="form-label"
                                    >
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Type here"
                                        className="form-control"
                                        id="product_price"
                                        required
                                        value={product.price}
                                        onChange={e => setPrice(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="product_price"
                                        className="form-label"
                                    >
                                        Count In Stock
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Type here"
                                        className="form-control"
                                        id="product_price"
                                        required
                                        value={product.stock}
                                        onChange={e => setStock(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">
                                        Description
                                    </label>
                                    <textarea
                                        placeholder="Type here"
                                        className="form-control"
                                        rows="7"
                                        required
                                        value={product.description}
                                        onChange={e =>
                                            setDescription(e.target.value)
                                        }
                                    ></textarea>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Images</label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        accept="image/*"
                                        value={image}
                                        required
                                        onChange={e => setImage(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Lưu
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default EditProduct
