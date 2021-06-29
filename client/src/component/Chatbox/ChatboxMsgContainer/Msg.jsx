import React from 'react';

import Avatar from '../../common/Avatar';

const Msg = ({ msgText, className, self, roomPhotoURL }) => {
  // msgText = msgText ? msgText : ["Alaba trapasdasdfasfasdfasdfasdfasdfasdfDFSADFASDFASDFSDFSDFSDFDSFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSFSDFSDAFSDFASDFASDFASDFASDFASDFSADFASDFASDFASDFASDFASDFASDFASDFASDFASDF", "lorem", "ahaha", "hehe"]

  return (
    <div className={className}>
      {!self && <Avatar size="small" imgSrc={roomPhotoURL} />}
      <div className="msg-list">
        {msgText && msgText.map((msg, i) => <p key={i}>{msg}</p>)}
      </div>
    </div>
  );
}

export default Msg;
