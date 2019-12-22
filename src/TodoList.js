/*
 * @Author: your name
 * @Date: 2019-12-22 09:36:54
 * @LastEditTime : 2019-12-22 10:52:28
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo01/src/TodoList.js
 */
import React, { Component } from 'react';
import {
  Input,
  Button,
  List
} from 'antd'

import store from './store/index'


class TodoList extends Component {
  constructor(props) {
    super(props);
    // this.state = {  }
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    
    // store 发生变化的时候，要通知到当前组件，更新当前组件的state, 不然当前组件的状态是不会变化
    store.subscribe(this.storeChange) 
  }
  storeChange() {
    // this.state = store.getState() // 错误，除了初始化。。。不能直接赋值
    this.setState(store.getState())
  }
  changeInputValue(e) {
    const action = {
      type: 'changeInput',
      value: e.target.value
    }
    store.dispatch(action);
  }
  addItem(){
    let value = this.state.inputValue
    let action = {
      type: 'addItem',
      value
    }
    store.dispatch(action)
  }
  deleteItem(index) {
    let value = index
    console.log(index, 'index---')
    let action = {
      type: 'deleteItem',
      value
    }
    store.dispatch(action)
  }
  render() { 
    return ( 
      <div style={{margin: 20}}>
        <div> 
          <Input 
            placeholder={this.state.inputValue}
            style= {{width: 250, marginRight: 20}}  
            onChange = { this.changeInputValue }
          />
          <Button type="primary" onClick={this.addItem}>
            添加
          </Button>
        </div>
        <div style={{margin: 10, marginLeft: 0,  width: 330}}>
          <List 
            bordered
            dataSource = {this.state.list}
            renderItem = {
              (item, index) => (<List.Item onClick={()=>this.deleteItem(index)}>{item}</List.Item>)
            }
          />
        </div>
      </div> );
  }
}
 
export default TodoList;