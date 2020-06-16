import React, { useState} from "react";
import ReactDOM from "react-dom";
 // import Pet from "./Pet";
import { Router } from "@reach/router";
import ThemeContext from "./themeContext";

import Navbar from "./navbar";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  const themehook = useState("peru");
  return (
    <ThemeContext.Provider value={themehook}>
      <div>
        <Navbar />
          <Router>
            <Details path="/details/:id" />
            <SearchParams path="/" />
          </Router>
      </div>
    </ThemeContext.Provider>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));
