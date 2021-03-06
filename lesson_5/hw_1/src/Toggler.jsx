import React from "react";

// const ON = "On";
// const OFF = "Off";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // text: 'Off',
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

    this.setState({ checked: !this.state.checked });

    // const btn = document.querySelector(".button");
    // btn.dataset.trigger === "false"
    //   ? (this.setState({ text: "On" }), (btn.dataset.trigger = "true"))
    //   : (this.setState({ text: "Off" }), (btn.dataset.trigger = "false"));

    // this.state.text === 'Off' ? this.setState({text: 'On',}) : this.setState({text: 'Off',})
  };

  render() {
    let text = this.state.checked ? "On" : "Off";
    return (
      <button className="toggler" onClick={this.setButtonText}>
        {text}
      </button>
    );
  }
}

export default Toggler;
