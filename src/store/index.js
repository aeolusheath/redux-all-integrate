/*
 * @Author: your name
 * @Date: 2019-12-22 09:56:41
 * @LastEditTime : 2019-12-22 10:12:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings 
 * @FilePath: /demo01/src/store/index.js
 */
import { createStore } from 'redux'
import reducer from './reducer'

// const store = createStore() // 图书仓库，但是此时并没有图书管理员【只能图书管理员执行操作】
// const store = createStore(reducer); // 添加图书管理员 


const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 添加chrome浏览器扩展
);
export default store;
