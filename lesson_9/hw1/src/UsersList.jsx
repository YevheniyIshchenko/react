import React from "react";
import User from "./User.jsx";
import Filter from "./Filter.jsx";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const users = this.props.users
      .filter((user) =>
        user.name.toLowerCase().includes(this.state.value.toLowerCase())
      )
      .map((el) => <User key={el.id} name={el.name} age={el.age} />);

    const count = users.length;
    return (
      <>
        <Filter
          filtertext={this.state.value}
          count={users.length}
          onChange={this.handleChange}
        />

        <ul className="users">{users}</ul>
      </>
    );
  }
}

export default UsersList;
