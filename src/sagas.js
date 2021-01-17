import { put, takeEvery, all, call } from 'redux-saga/effects'

import axios from "axios";
export function* loginRequest(values) {
    // debugger;
    // yield put({ type: 'LOGIN_SUCCESS', values })
    try {
        debugger;
        const data = yield axios.post("https://jsonplaceholder.typicode.com/posts", { values })
        console.log(data);

        yield put({ type: "LOGIN_SUCCESS", payload: data.data.values.value })
    } catch (error) {
        yield put({ type: "LOGIN_FAILURE", error })
        debugger;
        console.log("Error" + error)
    }

}

export function* watchLoginRequest() {
    yield takeEvery('LOGIN_REQUEST', loginRequest)
}

export default function* rootSaga() {
    yield all([
        watchLoginRequest()
    ])
}

const WebMethods = {
    POST: "post",
    GET: "get",
    PUT: "put",
    PATCH: "patch",
    DELETE: "delete",
};