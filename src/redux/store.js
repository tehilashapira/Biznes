import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { actions } from './actions/action';
// import { extractJwt, getStaticData } from './middleware/crudMiddleware'
// import staticDetailsReducer from './reducers/staticDetailsReducer'
import { getData } from './middleWare/investmentMiddkeWare'
import reducerInvestment from './reducers/reducerInvestment';
import reducerUser from './reducers/reducerUser'


const reducer = combineReducers({ reducerInvestment ,reducerUser});

// const store = createStore(reducer, applyMiddleware(getData)));
const store = createStore(reducer, composeWithDevTools(applyMiddleware(getData)));
/////
let jwtFromCookie;
store.dispatch(actions.setUserName(window.location.pathname.split('/')[1]))
if (window.location.hostname == "localhost") {
   jwtFromCookie="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJoaDh1SWpqblJDaFhVVmxwbkNSM0NMVjU3cHExIiwiZW1haWwiOiJ5YWVsbWFyZ2FsaXRAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjI2MTY2MzgzfQ.6YP4sx8S0oFd6ymGOjAHUoe0EgavyYNFxoXPT95kGWY"
    store.dispatch(actions.setTokenFromCookies(jwtFromCookie));
}
else {
    jwtFromCookie = document.cookie && document.cookie.includes('devJwt') ? document.cookie.split(";")
        .filter(s => s.includes('devJwt'))[0].split("=").pop() : null;

       store.dispatch(actions.setTokenFromCookies(jwtFromCookie));
}
/////


window.store = store;
export default store;
store.dispatch({ type: 'INIT_DATA' });
// store.dispatch(actions.initData)
store.dispatch({ type: 'EXTRACT_JWT' });