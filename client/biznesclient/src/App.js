import logo from './logo.svg';
import './App.css';
import CreateInvestment from './components/createInvestment'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CreateInvestment></CreateInvestment>
      </div>
    </Provider>
  );
}

export default App;
