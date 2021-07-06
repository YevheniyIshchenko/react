import React from "react";
import Clock from "./Clock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.toggle}>Toggle</button>
        <div>{this.state.visible && <Clock city="New York" offset={-5} />}</div>
        <div>{this.state.visible && <Clock city="Kyiv" offset={2}/>}</div>
        <div>{this.state.visible && <Clock city="London" offset={0}/>}</div>
      </>
    );
  }
}
export default App;
