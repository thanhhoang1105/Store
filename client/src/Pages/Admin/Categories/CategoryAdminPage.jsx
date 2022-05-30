import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { FaTrash, FaEye, FaPen } from 'react-icons/fa'
import { message } from 'antd'

import CreateCategory from '../../../Components/Admin/CategoriesCpn/CreateCategory'
import CategoryTable from '../../../Components/Admin/CategoriesCpn/CategoryTable'
import { getCategories } from '../../../Redux/Actions/CategoryAction'

const { Column, ColumnGroup } = Table

const CategoryAdminPage = () => {
    const dispatch = useDispatch()

    const { deleteCategory } = useSelector(state => state.deleteCategory)

    useEffect(() => {
        if (deleteCategory) {
            dispatch({ type: 'DELETE_CATEGORY_RESET' })
            dispatch(getCategories())
        }
    })

    // console.log('categories', categories)

    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Categories</h2>
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="row">
                        {/* Create category */}
                        <CreateCategory />
                        {/* Categories table */}
                        <CategoryTable />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoryAdminPage
