import produce from 'immer';
import { actions } from '../actions/action';
import { createReducer } from "./reducerUtils";

const initialState = {
    investment:{}
        // investmentName="",
        // description="",
        // dateCreateInvestment="",
        // dateEnd="",
        // recruitmentTarget="",
        // shareValue=""
    ,
    recruitment:{}
        // recruitmentTarget="",
        // shareValue=""
    
}


const investmentData={

    setInvestment(state,action){
        debugger
        state.investment=action.payload.investment
        state.recruitment=action.payload.details
    },
    getAllInvestmet(state,action){
        debugger
        state.investment=action.payload.investment
        state.recruitment=action.payload.recruitment
        console.log("investment"+ state.investment)
    }
}

export default produce((state, action) => createReducer(state, action, investmentData), initialState);