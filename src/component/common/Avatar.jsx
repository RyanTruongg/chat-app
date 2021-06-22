import React from 'react';

const AVATAR_SIZE_STYLES = {
  small: {
    width: "28px",
    height: "28px"
  },
  medium: {
    width: "40px",
    height: "40px"
  },
  large: {
    width: "60px",
    height: "60px"
  }
}

const Avatar = ({ imgSrc = "https://i.pravatar.cc/300", size = "medium" }) => {
  const imgStyle = {
    padding: "1px"
  }

  return (
    <div className="avatar round" style={AVATAR_SIZE_STYLES[size]}>
      <img className="round" style={imgStyle}
        src={imgSrc}
        alt=""
      />
    </div>
  );
}


export default Avatar;
