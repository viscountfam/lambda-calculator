import React from "react";
import Specials from "./Specials"
const SpecialButton = () => {
  return (
    <div className="spdiv">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Specials />
    </div>
  );
};
export default SpecialButton;