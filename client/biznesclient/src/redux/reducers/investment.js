import produce from 'immer';
import { createReducer } from "./reducerUtils";

const initialState = {
    investment:[
        // investmentName:"",
        // description:"", 
        // dateCreateInvestment:"",   
        // dateEnd:"",

    ],
    recruitment:[
    // RecruitmentTarget:"",
    // ShareValue:""
    ]
}
const investmentData={
    setInvestment(state, action){
        debugger
        // state.investment.push(action.payload.investment)
        // state.recruitment.push(action.payload.details)
        alert("add investment "+JSON.stringify( action.payload.investment))
    }
}

export default produce((state, action) => createReducer(state, action, investmentData), initialState);