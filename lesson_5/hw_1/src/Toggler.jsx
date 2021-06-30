import React from "react";

// const ON = "On";
// const OFF = "Off";
let checked = false;
class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Off",
    };
    // this.setButtonText = this.setButtonText.bind(this);
  }

  setButtonText = () => {
    // this.setState({
    //   text: this.state.text === OFF ? ON : OFF,
    // });

    // if (this.state.text === "Off") {
    //   this.setState({
    //     text: "On",
    //   });
    // } else {
    //   this.setState({
    //     text: "Off",
    //   });
    // }

    checked === false
      ? this.setState({ text: "On" })
      : this.setState({ text: "Off" });
    checked = !checked;

    // const btn = document.querySelector(".button");
    // btn.dataset.trigger === "false"
    //   ? (this.setState({ text: "On" }), (btn.dataset.trigger = "true"))
    //   : (this.setState({ text: "Off" }), (btn.dataset.trigger = "false"));

    // this.state.text === 'Off' ? this.setState({text: 'On',}) : this.setState({text: 'Off',})
  };

  render() {
    return (
      <div className="toggler">
        <button
          onClick={this.setButtonText}
          className="button"
          data-trigger="false"
        >
          {this.state.text}
        </button>
      </div>
    );
  }
}

export default Toggler;
