import React, { Component } from "react";
import Hoc from "./Hoc";
import EmpList from "./EmpList";
import UserList from "./UserList";

const empData = [
  { id: 1, name: "john" },
  { id: 2, name: "jack" },
  { id: 3, name: "jay" }
];

const userData = [
  { id: 1, name: "raj" },
  { id: 2, name: "mark" },
  { id: 3, name: "yash" }
];

const Emps = Hoc(EmpList, empData);

const Users = Hoc(UserList, userData);

class Main extends Component {
  render() {
    return (
      <div>
        <Emps />
        <Users />
      </div>
    );
  }
}

export default Main;
