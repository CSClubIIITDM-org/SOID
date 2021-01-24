import React from "react";
import "./styles/style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import Menubar from "./components/Menubar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Menubar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/contact" exact component={ContactPage} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
