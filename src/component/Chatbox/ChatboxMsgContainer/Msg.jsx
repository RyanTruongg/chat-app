import React from 'react';

import Avatar from '../../common/Avatar';

const Msg = ({ msgText, className }) => {
  msgText = msgText ? msgText : ["Alaba trapasdasdfasfasdfasdfasdfasdfasdfDFSADFASDFASDFSDFSDFSDFDSFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSFSDFSDAFSDFASDFASDFASDFASDFASDFSADFASDFASDFASDFASDFASDFASDFASDFASDFASDF", "lorem", "ahaha", "hehe"]

  return (
    <div className={className}>
      <Avatar size="small" />
      <div className="msg-list">
        {msgText && msgText.map(msg => <p>{msg}</p>)}
      </div>
    </div>
  );
}

export default Msg;
