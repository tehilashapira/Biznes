import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import CreateInvestment from './component/createInvestment'
import GetAllInvestment from './component/getAllInvestment'
import EditInvestment from "./component/editInvestment"
import DisplayInvestment from "./component/displayInvestment"
import Deal from "./component/deal"
import ProtectedRoute from './protectedRotes/protected'

//login
let TokenToString = document.cookie && document.cookie.includes("devJwt") ? document.cookie.split(";")
    .filter(s => s.includes('devJwt'))[0].split("=").pop() : null;




export default function Routes() {
    return (
        <Switch>          
            <Route path='/createInvestment'><CreateInvestment></CreateInvestment></Route>
            <Route path='/getAllInvestments'><GetAllInvestment></GetAllInvestment></Route>
            <Route path='/editInvestment/:investmentId'><EditInvestment></EditInvestment></Route>
            <Route path='/displayInvestment/:investmentId'><DisplayInvestment></DisplayInvestment></Route>
            <ProtectedRoute path='/:userName/deal'><Deal></Deal> </ProtectedRoute>
            <ProtectedRoute path={"/:jwtFromCookie/editInvestment/:investmentId"} user={TokenToString} component={EditInvestment} /> 
            <ProtectedRoute path='/:userName'><GetAllInvestment></GetAllInvestment></ProtectedRoute>
            <ProtectedRoute path='/'></ProtectedRoute>
        </Switch>
    )
}