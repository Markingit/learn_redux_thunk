import axios from 'axios'
import { CHANGE_INPIUT_VALUE, ADD_TODO_LIST, DELETE_TODO_LIST, INIT_LIST_ACTION } from './actionTypes'

export const getInputChangeAion = (value) => ({
    type: CHANGE_INPIUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_LIST
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_LIST,
    index
})


export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getTodoList =  () => {
    return (dispatch) => {
        axios.get('/api/todolist')
        .then((res) => {
          const data = res.data
          const action = initListAction(data)
          dispatch(action)
        })
        .catch(() => {console.log('error')})
    }
}