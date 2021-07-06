import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import CreateInvestment from './component/createInvestment'
import GetAllInvestment from './component/getAllInvestment'





export default function Routes() {
    return (
        <Switch>          
            <Route path='/createInvestment'><CreateInvestment></CreateInvestment></Route>
            <Route path='/'><GetAllInvestment></GetAllInvestment></Route>
        </Switch>
    )
}