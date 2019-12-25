import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreator'
import axios from 'axios'

function * mysaga() {
  yield takeEvery(GET_MY_LIST, getList)
}

function * getList(){
  console.log('===>>')

  //  try {
  //     let data = await axios.get('https://api.myjson.com/bins/m4454') // myjson.com
  //     // let data = await axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
  //     const { list: ultiMatelist } =  data.data
  //     store.dispatch(getListAction(ultiMatelist))
  //   } catch(err) {
  //     console.error('请求数据失败', err)
  //   }
  const res = yield axios.get('https://api.myjson.com/bins/m4454') 
  const { list: ultiMatelist } =  res.data
  const action = getListAction(ultiMatelist)
  yield put(action)
}

export default mysaga