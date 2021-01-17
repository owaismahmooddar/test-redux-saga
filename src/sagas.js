import { put, takeEvery, all } from 'redux-saga/effects'


export function* loginRequest(values) {
    debugger;
    yield put({ type: 'LOGIN_SUCCESS', values })
    // try {
    //     const data = yield call(Api.fetchUser, action.payload.url)
    //     yield put({type: "LOGIN_SUCCESS", data})
    //  } catch (error) {
    //     yield put({type: "LOGIN_FAILURE", error})
    //  }

}

export function* watchLoginRequest() {
    yield takeEvery('LOGIN_REQUEST', loginRequest)
}

export default function* rootSaga() {
    yield all([
        watchLoginRequest()
    ])
}