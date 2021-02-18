import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//
import Routes from "./routes";
import GlobalStyles from "./styles";

const App: React.FC = () => {
  return (
    // This fragment will be the redux provider in the future
    <Router>
      <Routes />
      <GlobalStyles />
    </Router>
  );
};

export default App;
