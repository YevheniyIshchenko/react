import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      spinner: false,
    };
  }
  handleLogin = () => {
    this.setState({
      spinner: true,
    });

    setTimeout(() => {
      this.setState({
        isLoggedIn: false,
        spinner: false,
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  render() {
    if (this.state.spinner) {
      return <Spinner size={20} />;
    }
    return this.state.isLoggedIn ? (
      <Login onLogin={this.handleLogin} />
    ) : (
      <Logout onLogout={this.handleLogout} />
    );
  }
}

export default Auth;
