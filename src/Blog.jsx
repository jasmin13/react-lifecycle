import React from "react";
import Rainbow from "./Rainbow";

const Blog = props => {
  return (
    <div>
      <h1>Blog Component</h1>
      <h1>{props.data}</h1>
    </div>
  );
};

export default Rainbow(Blog);
