import React from "react";

class Expand extends React.Component {
  state = {
    isOpen: false,
  };

  toggleDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleDialog}>
            {this.state.isOpen ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        {this.state.isOpen ? (
          <div className="expand__content">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}
export default Expand;

/* <div className="dialog">
<div className="dialog__heading">
  <h4 className="dialog__title">{title}</h4>
  <button className="dialog__close-btn" onClick={onClose}>
    +
  </button>
</div>
<div className="dialog__content">{children}</div>
</div> */
