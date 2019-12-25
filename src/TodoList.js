/*
 * @Author: kevin
 * @Date: 2019-12-22 09:36:54
 * @LastEditTime : 2019-12-22 16:14:46
 */
import React, { Component } from 'react';
import store from './store/index'
import { changeInputAction, deleteItemAction ,addItemAction, getMyListAction } from './store/actionCreator'
import TodoListUI from './TodoListUI'
// import axios from 'axios'
// import DynamicForm from './dynamic-form/Dynamic-form'
// import Test from './dynamic-form/Dynamic-form-2'


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
    // step 1 原生的redux action 是一个对象
    // try {
    //   let data = await axios.get('https://api.myjson.com/bins/m4454') // myjson.com
    //   // let data = await axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    //   const { list: ultiMatelist } =  data.data
    //   store.dispatch(getListAction(ultiMatelist))
    // } catch(err) {
    //   console.error('请求数据失败', err)
    // }

    // step 2 redux-thunk action是一个异步函数
    // const action = getTodoList()
    // store.dispatch(action) // 执行action函数

    // step3 redux-saga action仍然是一个对象
    const action = getMyListAction()
    store.dispatch(action)
  }
  componentDidMount() {
    this.getList()
  }
  render() { 
    return(
      <>
        {/* <DynamicForm/> */}
        {/* <Test /> */}
        <TodoListUI
            inputValue = {this.state.inputValue}
            changeInputValue = {this.changeInputValue}
            addItem = {this.addItem}
            list = {this.state.list}
            deleteItem = { this.deleteItem }
          />
      </>
    )
  }
}
 
export default TodoList;