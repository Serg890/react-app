import React from "react";
import "./modal.css";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logUser, failureLogin } from "../../redux/actions";
import USERS from "../../users/users";

class ModalWindow extends React.Component {
  state = {
    email: "",
    password: "",
    errorEmail: "",
    errorPassword: ""
  };

  loginUser = () => {
    const { logUser } = this.props;
    const { email, password } = this.state;
    for (const user of USERS) {
      if (user.email === email && user.password === password) {
        logUser({ email, password });
        localStorage.setItem("user", JSON.stringify({ email, password }));
        this.handleClose();
      } else {
        failureLogin({ email, password });
      }
    }
  };

  handleClose = () => {
    const { isOpen, handleModalWindow } = this.props;
    handleModalWindow(!isOpen);
  };

  render() {
    const { email, password } = this.state;
    const { isOpen } = this.props;

    return (
      <>
        <Modal show={isOpen} onHide={this.handleClose}>
          <button className="createAccount">Create a free account</button>
          <Modal.Title className="modalTitle">
            Sign In below to upload, share, edit and send documents.
          </Modal.Title>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="email"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={event =>
                    this.setState({ email: event.target.value })
                  }
                />
              </Form.Group>
              <Form.Group>
                <div className="formBox">
                  <Form.Label>Password</Form.Label>
                  <button type="button" className="forgotPass">
                    Forgot Password?
                  </button>
                </div>
                <Form.Control
                  className="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={event =>
                    this.setState({ password: event.target.value })
                  }
                />
              </Form.Group>
              <div className="butt">
                <Button
                  className="signIn"
                  variant="primary"
                  onClick={this.loginUser}
                >
                  Sign In
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { user, isActive } = state;
  return {
    user,
    isActive
  };
};

const mapDispatchToProps = {
  logUser,
  failureLogin
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ModalWindow)
);
