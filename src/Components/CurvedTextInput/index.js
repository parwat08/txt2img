import React, { Component } from "react";
import prettyLetters from "pretty-letters";

import "./CurvedTextTnput.css";

export default class extends Component {
  componentDidMount() {
    let options = {
      charTag: 'span'
    };

    prettyLetters("h1");
  }

  render() {
    return <h1>Hello World askad</h1>;
  }
}
