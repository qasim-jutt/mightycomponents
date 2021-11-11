/* eslint-disable no-unused-vars */
import React from "react";
import "./app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SelectPage from "./pages/customSelect";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/custom-select" exact component={SelectPage} />
      </Switch>
    </Router>
  );
}

export default App;
