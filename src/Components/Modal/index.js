import React, { Component, Fragment } from "react";
import ReactModal from "react-modal";
import { Button } from "reactstrap";
import { SketchPicker } from "react-color";
import "./Modal.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  onRequestClose = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <Fragment>
        <Button
          onClick={this.openModal}
          style={{
            marginBottom: "10px"
          }}
        >
          Change font color
        </Button>

        <ReactModal
          isOpen={this.state.modalIsOpen}
          // className="custom-modal"
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
            overlay: {
              zIndex: 100,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }
          }}
          ariaHideApp={false}
          onRequestClose={() => {
            this.setState({ modalIsOpen: false });
          }}
        >
          <button onClick={this.closeModal}>Close</button>
          <SketchPicker
            color={this.props.background}
            onChangeComplete={this.props.handleChangeComplete}
          />
        </ReactModal>
      </Fragment>
    );
  }
}
