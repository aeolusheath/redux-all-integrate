/*
 * @Author: kevin
 * @Date: 2019-12-22 11:19:06
 * @LastEditTime : 2019-12-22 11:27:18
 */
import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

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