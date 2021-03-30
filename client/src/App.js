import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/mainPage"
// cd
import UpcomingShoesPage from './pages/upcomingShoesPage'
import './App.css';

function App() {

  return (
    <div className="App">
    <Router>
      <Switch>
      <Route  exact path="/" component={MainPage} />
      {/* <Route  exact path="/trending" component={TrendingShoesPage} /> */}
      <Route  exact path="/upcoming" component={UpcomingShoesPage} />
      <Route exact path="/*" component={MainPage} />


      </Switch>
    </Router>
    </div>
  );
}

export default App;
