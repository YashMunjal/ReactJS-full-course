import React, { useState } from "react";
import ReactDOM from "react-dom";
//import Pet from "./Pet";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./themeContext";
import './style.css'
import Navbar from "./navbar";


const App = () => {
  const themehook = useState("peru");
  return (
    <ThemeContext.Provider value={themehook}>
      <div>
        <Navbar></Navbar>
        <Router>
          <Details path="/details/:id"></Details>
          <SearchParams path="/"></SearchParams>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
