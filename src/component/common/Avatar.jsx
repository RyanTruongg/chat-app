import React from 'react';

const AVATAR_SIZE_STYLES = {
  small: {
    width: "48px",
    height: "48px"
  },
  medium: {
    width: "56px",
    height: "56px"
  },
  large: {
    width: "80px",
    height: "80px"
  }
}

const Avatar = ({ imgSrc = "https://i.pravatar.cc/300", size = "medium" }) => {
  const imgStyle = {
    padding: size === "small" || size === "medium" ? "3px" : "4px"
  }

  return (
    <div className="bg-gradient round" style={AVATAR_SIZE_STYLES[size]}>
      <img className="round" style={imgStyle}
        src={imgSrc}
        alt=""
      />
    </div>
  );
}


export default Avatar;
