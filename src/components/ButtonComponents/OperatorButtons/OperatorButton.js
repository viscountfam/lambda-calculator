import React from "react";
import Operators from "./Operators"
import {operators} from "../../../data";
const OperatorButton = () => {
  return (
    <div className="opdiv">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {operators.map((button, index) => (
        <Operators key={index} button={button} />
      ))}
    </div>
  );
};
export default OperatorButton;