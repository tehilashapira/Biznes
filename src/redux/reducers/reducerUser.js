import produce from 'immer';
import { actions } from '../actions/action';
import { createReducer } from "./reducerUtils";

const initialState = {
   userName:'',
   jwt:''

}


const userData = {
    setUserName(state, action) {
        state.userName = action.payload
    },
    setTokenFromCookies(state, action) {
        state.jwt = action.payload
    }
}

export default produce((state, action) => createReducer(state, action, userData), initialState);