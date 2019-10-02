import React from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { ConfigureStore } from "./redux/store.js";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";
Amplify.configure(aws_exports);

// const store = ConfigureStore();

function App() {
  return (
    // <Provider store={store}>
    <React.Fragment>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <BrowserRouter basename="/">
        {
          // to be replaced by BrowserRouter
        }
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
      {/* // </Provider> */}
    </React.Fragment>
  );
}

export default App;
