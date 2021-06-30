import React from "react";

// const ON = "On";
// const OFF = "Off";
let checked = false;
class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Off',
      checked: false,
    };
    this.setButtonText = this.setButtonText.bind(this);
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
    this.state.text = this.state.checked ? 'On' : 'Off';
    this.setState({checked:!this.state.checked});

    // const btn = document.querySelector(".button");
    // btn.dataset.trigger === "false"
    //   ? (this.setState({ text: "On" }), (btn.dataset.trigger = "true"))
    //   : (this.setState({ text: "Off" }), (btn.dataset.trigger = "false"));

    // this.state.text === 'Off' ? this.setState({text: 'On',}) : this.setState({text: 'Off',})
  };

  render() {
    return (
      <button
        onClick={this.setButtonText}
        className="button"
        data-trigger="false"
      >
        {this.state.text}
      </button>
    );
  }
}

export default Toggler;
