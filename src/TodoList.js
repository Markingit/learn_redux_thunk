import React, { Component } from 'react'

import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from './store/index'
import { getInputChangeAion, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
// import { CHANGE_INPIUT_VALUE, ADD_TODO_LIST, DELETE_TODO_LIST } from './store/actionTypes'
class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleBtnclick = this.handleBtnclick.bind(this) 
        store.subscribe(this.handleChange)// 订阅
    }

    render() {
        return (
            <div style={{marginTop: '10px',marginLeft: '10px'}}>
               <Input 
                value={this.state.inputValue} 
                placeholder='info' 
                style={{width: '300px',marginRight: '10px'}}
                onChange={this.handleInputChange}
                />
               <Button type="primary" onClick={this.handleBtnclick}>提交</Button>
               <List
                 style={{marginTop: '10px',width: '300px'}}
                 bordered
                 dataSource={this.state.list}
                 renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
               />
            </div> 
        )
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