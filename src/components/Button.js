import React from "react";

const Button = props => (
  <button
    type="button"
    id={props.id}
    value={props.value}
    className={props.class}
    onClick={props.click}
  >
    {props.display}
  </button>
);

export default Button;
