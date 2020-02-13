import React, { Component } from "react";
import "./sidebar.css";
import { ReactComponent as Logo } from "../../assets/image/Group 39.svg";
import { ReactComponent as LogoHome } from "../../assets/image/Group 3.svg";
import { ReactComponent as LogoDoc } from "../../assets/image/Group 4.svg";
import { Link } from "react-router-dom";
import { logUser, failureLogin } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Sidebar extends Component {
  render() {
    const { user, location } = this.props;

    return (
      <>
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label
            className={`${user ? "open" : "close"} menu__btn `}
            htmlFor="menu__toggle"
          >
            <span></span>
          </label>
          <div className={`${user ? "open" : "close"}   menu__box`}>
            <div className="logoBox">
              <Logo className="logo" />
            </div>
            <nav className="menu">
              <div className="liBlock1">
                <Link
                  className={`${location.pathname === "/" ? "active" : ""} li`}
                  to="/"
                >
                  <LogoHome className="logoHome" /> Home
                </Link>
              </div>
              <div className="liBlock2">
                <Link
                  className={`${
                    location.pathname === "/document" ? "active" : ""
                  } li`}
                  to="/document"
                >
                  <LogoDoc className="logoDoc" /> My Documents
                </Link>
              </div>
            </nav>
          </div>
        </div>

        <div className={`${user ? "open" : "close"} sidebarBox normalMemu`}>
          <div className="logoBox">
            <Logo className="logo" />
          </div>
          <nav className="menu">
            <div className="liBlock1">
              <Link
                className={`${location.pathname === "/" ? "active" : ""} li`}
                to="/"
              >
                <LogoHome className="logoHome" /> Home
              </Link>
            </div>
            <div className="liBlock2">
              <Link
                className={`${
                  location.pathname === "/document" ? "active" : ""
                } li`}
                to="/document"
              >
                <LogoDoc className="logoDoc" /> My Documents
              </Link>
            </div>
          </nav>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidebar));
