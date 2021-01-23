import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/contact" exact component={ContactPage} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
