import React from "react";
import DropdownInputDisabled from "./DropdownInputDisabled";
import DropdownInputOption from "./DropdownInputOption";

const DropdownInput = () => {
  return (
    <select className="select-menu">
      <DropdownInputDisabled />
      <DropdownInputOption />
    </select>
  );
};

export default DropdownInput;
