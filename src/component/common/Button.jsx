import React from 'react';

const Button = (props) => {
  const { icon, variant } = props;
  let classArr = ["btn"];
  if (variant === "clear") classArr.push("btn--nobg");
  return (
    <button className={classArr.join(" ")}>
      <img src={icon} alt="" />
    </button>
  );
}

export default Button;
