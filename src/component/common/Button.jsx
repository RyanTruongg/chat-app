import React from 'react';

const Button = ({ iconName, variant, type, size, color, ...rest }) => {
  let classArr = ["btn"];
  if (variant === "clear") classArr.push("btn--nobg");
  if (size === "large") classArr.push("btn--large")

  return (
    <button {...rest} type={type} className={classArr.join(" ")}>
      <span style={{ color: color }} className="material-icons-round">
        {iconName}
      </span>
    </button>
  );
}

export default Button;
