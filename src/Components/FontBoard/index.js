import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import FontPicker from "font-picker-react";
import "./FontBoard.css";

import TextToImage from "../TextToImage";
import Header from "../Header";
import Footer from "../Footer";

export default class FontBoard extends Component {
  constructor() {
    super();
    this.state = {
      activeFont: "Open Sans",
      url: "http://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-U1Ug.ttf"
    };
  }

  render() {
    return (
      <Container>
        <Header />
        <Row>
          <Col>
            <FontPicker
              label="Choose Font"
              apiKey={process.env.REACT_APP_GOOGLE_FONT_API}
              activeFont={this.state.activeFont}
              onChange={nextFont =>
                this.setState({ activeFont: nextFont.family, url: nextFont.files.regular })
              }
            />
            {/* <p className="apply-font">The font will be applied to this text.</p> */}
          </Col>
        </Row>

        <TextToImage {...this.state} />
        <Footer />
      </Container>
    );
  }
}
