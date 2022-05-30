import axios from 'axios'
import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAIL,
    NEW_CATEGORY_REQUEST,
    NEW_CATEGORY_SUCCESS,
    NEW_CATEGORY_FAIL,
    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL
} from '../Constants/CategoryConstants'

export const getCategories = () => async dispatch => {
    try {
        dispatch({
            type: ALL_CATEGORY_REQUEST
        })

        const { data } = await axios.get('/api/v1/categories')

        dispatch({
            type: ALL_CATEGORY_SUCCESS,
            payload: data.categories
        })
    } catch (error) {
        dispatch({
            type: ALL_CATEGORY_FAIL,
            payload: error.response.data.message
        })
    }
}

//update category
export const updateCategory = (id, data) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_CATEGORY_REQUEST
        })

        const { data: response } = await axios.put(
            `/api/v1/admin/category/${id}`,
            data
        )

        dispatch({
            type: UPDATE_CATEGORY_SUCCESS,
            payload: response.category
        })
    } catch (error) {
        dispatch({
            type: UPDATE_CATEGORY_FAIL,
            payload: error.response.data.message
        })
    }
}

//create category
export const newCategory = categoryInfo => async dispatch => {
    try {
        dispatch({
            type: NEW_CATEGORY_REQUEST
        })

        const { data: response } = await axios.post(
            '/api/v1/admin/category',
            categoryInfo
        )

        console.log('data', categoryInfo)

        dispatch({
            type: NEW_CATEGORY_SUCCESS,
            payload: response.category
        })
    } catch (error) {
        dispatch({
            type: NEW_CATEGORY_FAIL,
            payload: error.response.data.message
        })
    }
}

//delete category
export const deleteCategory = id => async dispatch => {
    try {
        dispatch({
            type: DELETE_CATEGORY_REQUEST
        })

        const { data } = await axios.delete(`/api/v1/admin/category/${id}`)

        dispatch({
            type: DELETE_CATEGORY_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: DELETE_CATEGORY_FAIL,
            payload: error.response.data.message
        })
    }
}
