import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { extractJwt, getStaticData } from './middleware/crudMiddleware'
// import staticDetailsReducer from './reducers/staticDetailsReducer'
import { getData } from './middleWare/investmentMiddkeWare'
import reducerInvestment from './reducers/reducerInvestment';



const reducer = combineReducers({ reducerInvestment });

// const store = createStore(reducer, applyMiddleware(getData)));
const store = createStore(reducer, composeWithDevTools(applyMiddleware(getData)));
window.store = store;
export default store;
store.dispatch({ type: 'INIT_DATA' });