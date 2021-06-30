import React from "react";

const CORAL = "Coral";
const AQUA = "Aqua";
const BISQUE = "Bisque";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };
  }

  showColor = (squareColor) => {
    this.setState({
      color: squareColor,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.showColor(CORAL)}
            onMouseOut={() => this.showColor()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.showColor(AQUA)}
            onMouseOut={() => this.showColor()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.showColor(BISQUE)}
            onMouseOut={() => this.showColor()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
