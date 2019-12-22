/*
 * @Author: kevin
 * @Date: 2019-12-22 09:36:54
 * @LastEditTime : 2019-12-22 15:29:17
 */
import React, { Component } from 'react';
import store from './store/index'
import { changeInputAction, deleteItemAction ,addItemAction } from './store/actionCreator'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props) {
    super(props);
    // this.state = {  }
    this.state = store.getState()
    
    this.changeInputValue = this.changeInputValue.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.storeChange = this.storeChange.bind(this)

    
    // store 发生变化的时候，要通知到当前组件，更新当前组件的state, 不然当前组件的状态是不会变化
    store.subscribe(this.storeChange) 
  }
  storeChange() {
    // this.state = store.getState() // 错误，除了初始化。。。不能直接赋值
    this.setState(store.getState())
  }
  changeInputValue(e) {
    store.dispatch(changeInputAction(e.target.value));
  }
  addItem(){
    store.dispatch(addItemAction(this.state.inputValue))
  }
  deleteItem(index) {
    store.dispatch(deleteItemAction(index))
  }
  render() { 

    return <TodoListUI
              inputValue = {this.state.inputValue}
              changeInputValue = {this.changeInputValue}
              addItem = {this.addItem}
              list = {this.state.list}
              deleteItem = { this.deleteItem }
           />
  }
}
 
export default TodoList;