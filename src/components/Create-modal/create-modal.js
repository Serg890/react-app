import React from "react";
import "./create-modal.css";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import { addItem, successData } from "../../redux/actions";
import { connect } from "react-redux";

class ModalCreate extends React.Component {
  state = {
    name: ""
  };

  handleClose = () => {
    const { isOpen, handleModalWindow } = this.props;
    handleModalWindow(!isOpen);
  };

  onInputChange = value => {
    this.setState({ name: value });
  };

  onAddItem = () => {
    this.handleClose();
    const { name } = this.state;
    const { addItem } = this.props;
    addItem({ name });
  };

  render() {
    const { isOpen } = this.props;

    return (
      <Modal show={isOpen} onHide={this.handleClose}>
        <Modal.Title className="titleCreate">Create new file</Modal.Title>
        <Modal.Body className="bodyCreate">
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                className="titleInput"
                onChange={event => this.onInputChange(event.target.value)}
                type="text"
                placeholder="title"
              />
            </Form.Group>
            <div className="butt">
              <Button
                className="signIn"
                variant="primary"
                onClick={this.onAddItem}
              >
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  const { rItem, rData } = state;
  return {
    rItem,
    rData
  };
};

const mapDispatchToProps = {
  addItem,
  successData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ModalCreate));
