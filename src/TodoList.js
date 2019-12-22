/*
 * @Author: kevin
 * @Date: 2019-12-22 09:36:54
 * @LastEditTime : 2019-12-22 15:54:02
 */
import React, { Component } from 'react';
import store from './store/index'
import { changeInputAction, deleteItemAction ,addItemAction, getListAction } from './store/actionCreator'
import TodoListUI from './TodoListUI'
import axios from 'axios'

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
  async getList() {
    try {
      let data = await axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
      const {data: { data: { list: ultiMatelist }}} = data
      store.dispatch(getListAction(ultiMatelist))
    } catch(err) {
      console.error('请求数据失败', err)
    }
  }
  componentDidMount() {
    this.getList()
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