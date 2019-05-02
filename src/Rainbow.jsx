import React from "react";

const Rainbow = WrappedComponent => {
  return props => {
    return (
      <div>
        <h1 style={{ color: "red" }}>Rainbow Component</h1>
        <WrappedComponent data={"pass data"} />
      </div>
    );
  };
};

export default Rainbow;
