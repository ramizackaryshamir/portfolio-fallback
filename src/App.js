import React from "react";
import {
  Routes,
  Route,
} from "react-router";
import "./App.js";
import Home from "./screens/Home/Home.jsx";
import Contact from "./screens/Contact/Contact.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Routes>
    </>
  );
}

export default App;
