import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './components/HomePage';
import CheckInPage from './components/CheckInPage';
import CheckOutPage from './components/CheckOutPage';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/CheckInPage" exact component={CheckInPage} />
        <Route path="/CheckOutPage" exact component={CheckOutPage} />
      </Switch>
    </Router>
  );
}

export default App;
