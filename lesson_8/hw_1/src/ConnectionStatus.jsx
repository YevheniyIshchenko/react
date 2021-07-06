import React from "react";

class ConnectionStatus extends React.Component {
  state = {
    status: true,
  };

  componentDidMount() {
    window.addEventListener("online", this.setStatusOn);
    window.addEventListener("offline", this.setStatusOff);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.setStatusOn);
    window.removeEventListener("offline", this.setStatusOff);
  }

  setStatusOn = () => {
    this.setState({
      status: true,
    });
  };

  setStatusOff = () => {
    this.setState({
      status: false,
    });
  };

  render() {
    const onlineStatus = this.state.status ? "status" : "status status_offline";
    const result = this.state.status ? "online" : "offline";
    return <div className={onlineStatus}>{result}</div>;
  }
}

export default ConnectionStatus;
