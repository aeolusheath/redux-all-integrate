/*
 * @Author: your name
 * @Date: 2019-12-22 09:56:48
 * @LastEditTime : 2019-12-22 11:15:46
 */
import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

const defaultState = {
  inputValue: '输入待办事项',
  list: [
    '8点吃早饭',
    '9点晨会',
    '10点代码review'
  ]
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
  return state
}