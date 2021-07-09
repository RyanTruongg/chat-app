import React from 'react';

import Avatar from '../../common/Avatar';

const MsgBlock = ({ msgText, className, self, roomPhotoURL }) => {


  return (
    <div className={className}>
      {!self && <Avatar size="small" imgSrc={roomPhotoURL} />}
      <div className="msg-list">
        {msgText?.map(
          ({ content, timestamp }, i) => {
            let date = new Date(timestamp - new Date().getTimezoneOffset() * 60000);
            let localeTimeString = date.toLocaleString('en-GB', { timeZone: 'UTC' });
            return (
              <p key={i} data-time={localeTimeString}>
                {content}
              </p>
            )
          })
        }
      </div>
    </div>
  );
}

export default MsgBlock;
