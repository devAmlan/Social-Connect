import './App.css';
import HomePage from './HomePage'
import AccountPage from './AccountPage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Router>
         <Switch>
         <Route path="/" exact>
         <HomePage/>
         </Route>
         <Route path="/account" exact>
         <AccountPage/>
         </Route>
         </Switch>
       </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
