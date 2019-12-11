import React from "react";

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <button className = "opbtn btn">
      <span>{props.button.value}</span>
    </button>
  );
};
export default Operators