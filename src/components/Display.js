import React from "react";

const equationLimit = str => {
  let res = String(str).match(/(.{20})\s*$/g) || str;
  return res;
};

const displayLimit = str => {
  let res = String(str).match(/(.{8})\s*$/g) || str;
  return res;
};

const Display = props => (
  <div id="calc-display" className="row-1-2 col-1-4">
    <span id="eq">
      {props.equation <= 20 ? props.equation : equationLimit(props.equation)}
    </span>
    <span id="dis">
      {props.display <= 8 ? props.display : displayLimit(props.display)}
    </span>
  </div>
);

export default Display;
