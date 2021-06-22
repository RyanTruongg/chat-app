import React from 'react';

const Button = (props) => {
  const { icon } = props
  return (
    <button className="btn">
      <img src={icon} alt="" />
    </button>
  );
}

export default Button;
