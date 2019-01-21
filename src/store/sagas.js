
import { put, takeEvery } from 'redux-saga/effects'
import { GET_ININ_LIST } from './actionTypes'
import axios from 'axios';
import { initListAction } from './actionCreators'

function* getInitList() {
    try {
        const res = yield axios.get('/api/todolist')
        const action = initListAction(res.data)
        yield put(action)
    }catch(e) {
        console.log('list.json请求失败')
    }
    // axios.get('/api/todolist')
    //     .then((res) => {
    //       const data = res.data
    //       const action = initListAction(data)
    //       put(action)
    //       console.log(action)
          
    //     })
    //     .catch(() => {console.log('error')})
}
// generator函数
function* mySaga() {
    yield takeEvery(GET_ININ_LIST, getInitList);
}
  
  export default mySaga;