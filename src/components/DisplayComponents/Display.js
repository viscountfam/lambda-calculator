import React from "react";

const Display = (props) => {
  return <div className="display">{props.hello + props.goodbye}</div>;
};

export default Display