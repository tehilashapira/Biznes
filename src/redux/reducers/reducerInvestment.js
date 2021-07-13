import produce from 'immer';
import { actions } from '../actions/action';
import { createReducer } from "./reducerUtils";

const initialState = {
    investment: []
    // investmentName="",
    // description="",
    // dateCreateInvestment="",
    // dateEnd="",
    // recruitmentTarget="",
    // shareValue=""
    ,
    recruitment: []
    // recruitmentTarget="",
    // shareValue=""

}


const investmentData = {


    setInvestment(state, action) {
        debugger
        // state.investment.push(action.payload.investment)
        // state.recruitment.push(action.payload.details)
        alert("add investment " + JSON.stringify(action.payload.investment))
    },
    getAllInvestmet(state, action) {
        debugger
        state.investment = action.payload.investment
        state.recruitment = action.payload.recruitment
        console.log("investment" + state.investment)
    }
}

export default produce((state, action) => createReducer(state, action, investmentData), initialState);