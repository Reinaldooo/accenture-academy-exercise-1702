import React from "react";
//
import GlobalStyles from "./styles";
// import Landing from "./views/pages/Landing";
// import Login from "./views/pages/Login";
import ForgotPasswd from "./views/pages/ForgotPasswd";

const App: React.FC = () => {
  return (
    // This fragment will be the redux provider in the future
    <>
      {/* <Landing /> */}
      {/* <Login /> */}
      <ForgotPasswd />
      <GlobalStyles />
    </>
  );
};

export default App;
