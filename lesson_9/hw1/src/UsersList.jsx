import React from "react";
import User from "./User.jsx";
import Filter from "./Filter.jsx";

class UsersList extends React.Component {
  state = {
    value: "",
    users: [],
    // [
    //   { id: 1, name: "Andy", age: 32 },
    //   { id: 2, name: "Bob", age: 30 },
    //   { id: 3, name: "Tom Hulk", age: 40 },
    //   { id: 4, name: "Tom Hank", age: 50 },
    //   { id: 5, name: "Audra", age: 30 },
    //   { id: 6, name: "Anna", age: 68 },
    //   { id: 7, name: "Tom", age: 34 },
    //   { id: 8, name: "Tom Riddle", age: 28 },
    //   { id: 9, name: "Bolo", age: 23 },
    // ],
  };
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const users = this.state.users;
    const usersFilter =
      this.state.value !== ""
        ? users.filter((user) =>
            user.name.toLowerCase().includes(this.state.value.toLowerCase())
          )
        : users;
    return (
      <>
        <Filter
          filtertext={this.state.value}
          count={usersFilter.lenght}
          onSubmit={this.handleChange}
        />

        <ul className="users">
          {usersFilter.map((el) => (
            <User key={el.id} name={el.name} age={el.age} />
          ))}
        </ul>
      </>
    );
  }
}

export default UsersList;
