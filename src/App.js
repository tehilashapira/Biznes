import logo from './logo.svg';
import './App.css';
import CreateInvestment from './component/createInvestment'
import { Provider } from 'react-redux'
import store from './redux/store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routes from './routes';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Routes></Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
