import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Toolbar from "./components/toolbar/toolbar";
import Home from "./components/home/home";
import Documents from "./components/documents/documents";
import { connect } from "react-redux";
import { logUser, failureLogin } from "./redux/actions";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    // const { history, user } = this.props;
    // if (!user) {
    //   history.push("/");
    // }

    if (localStorage.getItem("user")) {
      const { logUser } = this.props;
      const newUser = JSON.parse(localStorage.getItem("user"));
      logUser(newUser);
    }
  }

  render() {
    return (
      <Switch>
        <div className="bigContainer">
          <Sidebar />
          <div className="homePage">
            <Toolbar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/document">
              <Documents />
            </Route>
          </div>
        </div>
        <Redirect to="/" />
      </Switch>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
