import React from "react";
import ReactDOM from "react-dom";
//import Pet from "./Pet";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Router>
        <Details path="/details/:id" ></Details>
        <SearchParams path="/"></SearchParams>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
