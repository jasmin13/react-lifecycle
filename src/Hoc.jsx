import React, { Component } from "react";

const Hoc = (WrappedComponent, data) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data
      };
    }
    render() {
      return (
        <div>
          <WrappedComponent data={this.state.data} {...this.props} />
        </div>
      );
    }
  };
};
export default Hoc;
