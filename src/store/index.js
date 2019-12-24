/*
 * @Author: your name
 * @Date: 2019-12-22 09:56:41
 * @LastEditTime : 2019-12-22 10:12:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings 
 * @FilePath: /demo01/src/store/index.js
 */
import reducer from './reducer'
// import { createStore } from 'redux'

// step 2
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// step 1
// const store = createStore() // 图书仓库，但是此时并没有图书管理员【只能图书管理员执行操作】
// const store = createStore(reducer); // 添加图书管理员 

// step 2 引入redux-thunk
// 为什么要引入 redux-thunk
// 引入异步action，将业务代码，比如获取服务端数据的代码不写在component里面,写在外面 【好处：便于测试， 逻辑更清晰】
// 将这个函数传入store，store将dispatcher传入函数，在异步函数的回调里面dispatch这个action

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(
  reducer, /* preloadedState, */
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 添加chrome浏览器扩展
  enhancer
);
export default store;
