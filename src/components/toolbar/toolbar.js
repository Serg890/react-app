import React, { Component } from "react";
import "./toolbar.css";
import { ReactComponent as Search } from "../../assets/image/Group 7.svg";
import { ReactComponent as Logo } from "../../assets/image/Group 39.svg";
import ModalWindow from "../modal-sign/modal";
import { logUser, failureLogin } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Toolbar extends Component {
  state = {
    isOpen: false
  };

  handleShow = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };
  handleModalWindow = boolean => {
    this.setState({ isOpen: boolean });
  };

  logout = () => {
    const { logUser, history } = this.props;

    localStorage.removeItem("user");
    logUser(null);
    history.push("/");
  };

  render() {
    const { user } = this.props;
    const { isOpen } = this.state;
    return (
      <>
        <ModalWindow
          isOpen={isOpen}
          handleModalWindow={this.handleModalWindow}
        ></ModalWindow>

        <div className="toolBox">
          <Logo className={`${user ? "close" : "open"} logoType`} />
          <div className="inputBox">
            <input className="form-control inpSearch" placeholder="Search" />
            <span className="textSearch">
              <Search className="search" />
            </span>
          </div>
          <div className="navbar">
            <nav className="navbar navbar-expand navbar-light">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item about">
                    <span>About</span>
                  </li>
                  <li className="nav-item contact">
                    <span>Contact</span>
                  </li>
                  <li className={`${user ? "open " : "close"} nav-item logout`}>
                    <span onClick={this.logout}>Logout</span>
                  </li>
                  <li className={`${user ? "close " : "open"} nav-item singIn`}>
                    <span onClick={() => this.handleShow()}>Sing In</span>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    user
  };
};

const mapDispatchToProps = {
  logUser,
  failureLogin
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Toolbar)
);
