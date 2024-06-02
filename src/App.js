import React from "react";
import {
  Route,
  Switch,
} from "react-router";
import "./App.js";
import Home from "./screens/Home/Home.jsx";
import Contact from "./screens/Contact/Contact.jsx";

function App() {

  return (
    <>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Project />
        </Route>
      </Switch>
    </>
  );
}

export default App;
