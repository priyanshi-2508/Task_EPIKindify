import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './components/HomePage';
import CheckIn from './components/CheckIn';
import CheckOut from './components/CheckOut';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/CheckIn" exact component={CheckIn} />
        <Route path="/CheckOut" exact component={CheckOut} />
      </Switch>
    </Router>

  );
}

export default App;
