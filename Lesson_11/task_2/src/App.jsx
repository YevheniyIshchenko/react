import React from "react";
import Dialog from "./Dialog.jsx";

class App extends React.Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };
  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    const elem = <p>Some text</p>;
    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>
          Show dialog
        </button>
        <Dialog
          title={"some title"}
          content={elem}
          isOpen={this.state.isOpen}
          onClose={this.hideDialog}
        ></Dialog>
      </div>
    );
  }
}

export default App;
