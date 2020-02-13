import React from "react";
import "./edit-modal.css";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import { addItem, successData } from "../../redux/actions";
import { connect } from "react-redux";

class ModalEdit extends React.Component {
  handleCloseEdit = () => {
    const { isOpenEdit, handleModalWindowEdit } = this.props;
    handleModalWindowEdit(!isOpenEdit);
  };

  render() {
    const { isOpenEdit, onInputEdit, handleSaveEdit, item } = this.props;

    return (
      <Modal show={isOpenEdit} onHide={this.handleCloseEdit}>
        <Modal.Title className="titleCreate">Edit file</Modal.Title>
        <Modal.Body className="bodyCreate">
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                className="titleInput"
                value={item && item.name}
                onChange={event => onInputEdit(event.target)}
                type="text"
                placeholder="edit title"
              />
            </Form.Group>
            <div className="butt">
              <Button
                className="signIn"
                variant="primary"
                onClick={handleSaveEdit}
              >
                Save edit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  const { rData } = state;
  return {
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
)(withRouter(ModalEdit));
