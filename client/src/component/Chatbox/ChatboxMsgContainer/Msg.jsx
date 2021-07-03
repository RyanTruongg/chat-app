import React from 'react';

import Avatar from '../../common/Avatar';

const Msg = ({ msgText, className, self, roomPhotoURL }) => {
  // msgText = msgText ? msgText : ["Alaba trapasdasdfasfasdfasdfasdfasdfasdfDFSADFASDFASDFSDFSDFSDFDSFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSFSDFSDAFSDFASDFASDFASDFASDFASDFSADFASDFASDFASDFASDFASDFASDFASDFASDFASDF", "lorem", "ahaha", "hehe"]

  return (
    <div className={className}>
      {!self && <Avatar size="small" imgSrc={roomPhotoURL} />}
      <div className="msg-list">
        {msgText?.map(({ content, timestamp }, i) => {
          let localeTimeString = new Date(timestamp).toLocaleString('en-GB', { timeZone: 'UTC' });
          return (
            <p key={i} data-time={localeTimeString}>{content}</p>
          )
        })}
      </div>
    </div>
  );
}

export default Msg;
