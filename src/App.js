import React from "react";
import "./styles/style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import Menubar from "./components/Menubar";
import HomePage from "./Pages/HomePage";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import ResearchPage from "./Pages/ResearchPage";
import Facilities from "./Pages/Facilities";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Menubar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/members" exact component={ContactPage} />
          <Route path="/course" exact component={Courses} />
          <Route path="/research" exact component={ResearchPage} />
          <Route path="/facilities" exact component={Facilities} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
