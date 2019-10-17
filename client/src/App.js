import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/mainPage"
import TrendingShoesPage from "./pages/trendingShoesPage"
import './App.css';

function App() {

  return (
    <div className="App">
    <Router>
      <Switch>
      <Route  exact path="/" component={MainPage} />
      <Route  exact path="/trending" component={TrendingShoesPage} />

      </Switch>
    </Router>
    </div>
  );
}

export default App;
