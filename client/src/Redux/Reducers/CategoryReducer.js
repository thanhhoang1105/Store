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

//category reducer
export const categoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case ALL_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ALL_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload
            }
        case ALL_CATEGORY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

//New category
export const newCategoryReducer = (state = { newCategory: [] }, action) => {
    switch (action.type) {
        case NEW_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case NEW_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                newCategory: action.payload
            }
        case NEW_CATEGORY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

//Update category
export const updateCategoryReducer = (
    state = { updateCategory: [] },
    action
) => {
    switch (action.type) {
        case UPDATE_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                updateCategory: action.payload
            }
        case UPDATE_CATEGORY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

//Delete category
export const deleteCategoryReducer = (
    state = { deleteCategory: [] },
    action
) => {
    switch (action.type) {
        case DELETE_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                deleteCategory: action.payload
            }
        case DELETE_CATEGORY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
