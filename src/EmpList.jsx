import React, { Component } from "react";

class empList extends Component {
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Emp id</th>
              <th>Emp name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default empList;
