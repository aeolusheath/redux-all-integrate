/*
 * @Author: kevin
 * @Date: 2019-12-22 11:19:06
 * @LastEditTime : 2019-12-22 15:51:16
 */
import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value)=>{
  return {
    type: CHANGE_INPUT,
    value: value
  }
}

export const addItemAction = (value)=>{
  return {
    type: ADD_ITEM,
    value: value
  }
}

export const deleteItemAction = (value)=>{
  return {
    type: DELETE_ITEM,
    value: value
  }
}

export const getListAction = (list) => {
  return {
    type: GET_LIST,
    list: list
  }
}

// redux-thunk 可以以异步函数作为action，不是对象
export const getTodoList = () => {
  return async (dispach)=> {
    try {
      
      let data = await axios.get('https://api.myjson.com/bins/m4454') // myjson.com
      // let data = await axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
      const { list: ultiMatelist } =  data.data
      // store.dispatch(getListAction(ultiMatelist))
      // console.log(ultiMatelist, 'ddd')
      const action = getListAction(ultiMatelist)
      dispach(action)
    } catch(err) {
      console.error('请求数据失败', err)
    }

  }

}

// redux-saga

export const getMyListAction = ()=>({ type: GET_MY_LIST})