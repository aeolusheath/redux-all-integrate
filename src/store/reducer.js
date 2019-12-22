/*
 * @Author: your name
 * @Date: 2019-12-22 09:56:48
 * @LastEditTime : 2019-12-22 16:17:41
 */
import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes'

const defaultState = {
  inputValue: '输入待办事项',
  list: []
}

// 图书管理员，处理借书还书动作，action就是动作类型
// defaultState为初始值，第一次初始化的时候使用
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(action.value)
    newState.inputValue = ''
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    // let newState = JSON.parse(JSON.stringify(defaultState)) wrong
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState;
  }
  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.list
    return newState;
  }
  return state
}