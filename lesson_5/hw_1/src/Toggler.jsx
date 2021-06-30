import React from "react";

// const ON = "On";
// const OFF = "Off";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Off',
      check: false,
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

    
    this.state.check === false ? this.setState({text: 'On', check: true}) : this.setState({text: 'Off', check:false})

  };

  render() {
    return (
      <div className="toggler">
        <button onClick={this.setButtonText} className="button">
          {this.state.text}
        </button>
      </div>
    );
  }
}

export default Toggler;
