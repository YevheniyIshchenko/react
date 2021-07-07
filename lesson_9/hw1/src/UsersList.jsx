import React from "react";
import User from "./User.jsx";
import Filter from "./Filter.jsx";

class UsersList extends React.Component {
  state = {
    value: "",
  };
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const users = this.props.users.filter((user) =>
      user.name.toLowerCase().includes(this.state.value.toLowerCase())
    );

    // const usersFilter =
    //   this.state.value !== ""
    //     ? users.filter((user) =>
    //         user.name.toLowerCase().includes(this.state.value.toLowerCase())
    //       )
    //     : users;
    return (
      <>
        <Filter
          filtertext={this.state.value}
          count={users.lenght}
          onSubmit={this.handleChange}
        />

        <ul className="users">
          {users.map((el) => (
            <User key={el.id} name={el.name} age={el.age} />
          ))}
        </ul>
      </>
    );
  }
}

export default UsersList;
