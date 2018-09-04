import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import FontBoard from "../src/Components/FontBoard";
import CurvedTextTnput from "../src/Components/CurvedTextInput";

class App extends Component {
  render() {
    return (
      <Fragment>
        <FontBoard />
        {/* <CurvedTextTnput /> */}
      </Fragment>
    );
  }
}

export default App;
