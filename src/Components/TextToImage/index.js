import React, { Component, Fragment } from "react";
// import repng from "repng";
import PropTypes from "prop-types";
import { Button, Input, Label } from "reactstrap";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver/FileSaver";
import { Container, Row, Col } from "react-grid-system";

import ReactModal from "../Modal";
import "./TextToImage.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontColor: "#000000",
      fontSize: 20,
      letterSpaceSize: "",
      wordSpaceSize: "",
      text: " ",
      textRadius: " "
    };
  }

  handleChangeComplete = color => {
    this.setState({
      background: color.hex,
      fontColor: color.hex
    });
  };

  handleValueChange = event => {
    let { name, value } = event.target;
    this.setState(prevState => {
      let caseCheck = ["letterSpaceSize", "wordSpaceSize", "fontSize"];

      let final = {
        [name]: value
      };
      if (caseCheck.includes(name)) {
        if (value >= 0) return final;
      } else {
        return final;
      }
    });
  };

  downloadPNG = () => {
    let result = document.getElementById("userText");

    console.log("result", result);

    domtoimage.toBlob(result).then(function(blob) {
      saveAs(blob, `img.png`);
    });
  };

  downloadSVG = () => {
    domtoimage
      .toSvg(document.getElementById("userText"), {})
      .then(function(dataURL) {
        var dl = document.createElement("a");
        document.body.appendChild(dl); // This line makes it work in Firefox.
        dl.setAttribute("href", dataURL);
        dl.setAttribute("download", `img.svg`);
        dl.click();
      });
  };

  render() {

    // webfont.load({
    //   custom: {
    //     families: [this.props.activeFont],
    //     urls: []
    //   }
    // })
    return (
      <Fragment>
        <Container fluid style={{ lineHeight: "32px", padding: 10 }}>
          <Row debug>
            <Col xs={8} debug>
              <Input
                type="textarea"
                name="text"
                id="userText"
                className="custom-area"
                value={this.state.text}
                onChange={this.handleValueChange}
                // This css is dynamic, it has to be here cause it's data depend on props.
                style={{
                  fontSize: `${this.state.fontSize}px`,
                  letterSpacing: `${this.state.letterSpaceSize}px`,
                  wordSpacing: `${this.state.wordSpaceSize}px`,
                  fontFamily: this.props.activeFont,
                  color: this.state.fontColor,
                  transform: `rotate(${this.state.textRadius}deg)`
                }}
              />
            </Col>
            <Col xs={4} debug>
              <Label for="letterSpacing" className="label">
                Letter Space
              </Label>
              <Input
                type="number"
                name="letterSpaceSize"
                id="letterSpacing"
                value={this.state.letterSpaceSize}
                onChange={this.handleValueChange}
                placeholder={"Enter the letter space in px"}
              />
              <br />
              <Label for="wordSpacing" className="label">
                Word Space
              </Label>
              <Input
                type="number"
                name="wordSpaceSize"
                id="wordSpacing"
                value={this.state.wordSpaceSize}
                onChange={this.handleValueChange}
                placeholder={"Enter the word space in px"}
              />
              <br />
              <Label for="fontInput" className="label">
                Font Size
              </Label>
              <Input
                type="number"
                name="fontSize"
                id="fontInput"
                value={this.state.fontSize}
                onChange={this.handleValueChange}
                placeholder={"Enter the font size in px"}
              />
              <br />
              <Label for="fontInput" className="label">
                Text curve degree
              </Label>
              <Input
                type="number"
                name="textRadius"
                id="textRadius"
                value={this.state.textRadius}
                onChange={this.handleValueChange}
                placeholder={"Enter the font radius in degree"}
              />
              <br />
              <ReactModal
                background={this.state.background}
                handleChangeComplete={this.handleChangeComplete}
              />
              <br />
            </Col>
          </Row>
        </Container>
        <Button onClick={this.downloadPNG}>Download as PNG</Button>
        &nbsp;
        <Button onClick={this.downloadSVG}>Download as SVG</Button>
      </Fragment>
    );
  }
}
