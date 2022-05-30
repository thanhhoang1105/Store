import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { message } from 'antd'

import { newCategory } from '../../../Redux/Actions/CategoryAction'
import Loading from '../../../Components/User/More/Loader'

function convertToSlug(Text) {
    return Text.toLowerCase()
        .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ')
        .replace(/^\s+|\s+$/gm, '')
        .replace(/\s+/g, '-')
}

const CreateCategory = () => {
    const dispatch = useDispatch()

    const [categoryName, setCategoryName] = useState('')
    const [categoryDescription, setCategoryDescription] = useState('')

    const { categories, error, loading } = useSelector(
        state => state.categories
    )
    // const { success } = useSelector(state => state.createCategory)

    console.log('categories', categories)

    const handleSubmitCreateCategory = e => {
        e.preventDefault()
        const categoryInfo = {
            name: categoryName,
            slug: convertToSlug(categoryName),
            description: categoryDescription
        }
        dispatch(newCategory(categoryInfo))
    }

    useEffect(() => {
        if (error) {
            message.error(error)
        }
        // if (success) {
        //     message.success('Category created successfully')
        //     dispatch({ type: 'NEW_CATEGORY_RESET' })
        // }
    }, [error, dispatch])

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="col-md-12 col-lg-4">
                    <form onSubmit={handleSubmitCreateCategory}>
                        <div className="mb-4">
                            <label
                                htmlFor="category_name"
                                className="form-label"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="form-control py-3"
                                id="category_name"
                                onChange={e => setCategoryName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="category_slug"
                                className="form-label"
                            >
                                Slug
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="form-control py-3"
                                id="category_slug"
                                disabled
                                value={convertToSlug(categoryName)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Description</label>
                            <textarea
                                placeholder="Type here"
                                className="form-control"
                                rows="4"
                                onChange={e =>
                                    setCategoryDescription(e.target.value)
                                }
                            ></textarea>
                        </div>

                        <div className="d-grid">
                            <button
                                className="btn btn-primary py-3"
                                type="submit"
                            >
                                Create category
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default CreateCategory
