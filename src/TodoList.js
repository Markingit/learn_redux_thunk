import React, { Component } from 'react'

import 'antd/dist/antd.css'
import store from './store/index'
import { getInputChangeAion, getAddItemAction, getDeleteItemAction, initListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios';
class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleBtnclick = this.handleBtnclick.bind(this) 
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleChange)// 订阅
    }

    render() {
        return (
            // {<div style={{marginTop: '10px',marginLeft: '10px'}}>
            //    <Input 
            //     value={this.state.inputValue} 
            //     placeholder='info' 
            //     style={{width: '300px',marginRight: '10px'}}
            //     onChange={this.handleInputChange}
            //     />
            //    <Button type="primary" onClick={this.handleBtnclick}>提交</Button>
            //    <List
            //      style={{marginTop: '10px',width: '300px'}}
            //      bordered
            //      dataSource={this.state.list}
            //      renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
            //    />
            // </div>} 
            <TodoListUI 
                inputValue={this.state.inputValue}
                list = {this.state.list}
                handleInputChange = {this.handleInputChange}
                handleBtnclick = {this.handleBtnclick}
                handleItemDelete = {this.handleItemDelete}
            />
        )
    }

    componentDidMount() {
        axios.get('/api/todolist')
        .then((res) => {
          const data = res.data
          const action = initListAction(data)
          store.dispatch(action)
        })
        .catch(() => {console.log('error')})
    }

    handleInputChange(e) {
        // const action = {
        //     type: CHANGE_INPIUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAion(e.target.value)
        store.dispatch(action)
    }

    handleChange() {
        this.setState(store.getState())
    }

    handleBtnclick() {
        // const action = {
        //     type: ADD_TODO_LIST
        // };
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleItemDelete(index) {
        // const action = {
        //     type: DELETE_TODO_LIST,
        //     index
        // }
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList