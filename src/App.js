import React, { useState, lazy, Suspense } from "react";
//import ReactDOM from "react-dom";
//import Pet from "./Pet";
import { Router } from "@reach/router";
import ThemeContext from "./themeContext";
import "./style.css";
import Navbar from "./navbar";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const themehook = useState("peru");
  return (
    <ThemeContext.Provider value={themehook}>
      <div>
        <Navbar></Navbar>
        <Suspense fallback={<h1>loading route …</h1>}>
          <Router>
            <Details path="/details/:id"></Details>
            <SearchParams path="/"></SearchParams>
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

export default App
