import { useRef, useEffect } from 'react';

import Msg from './Msg';
import './style.css';

const ChatboxMsgContainer = ({ msgList, uid, roomPhotoURL }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [msgList])

  return (
    <div ref={containerRef} className="chatbox-msg-container">
      {
        msgList?.map((msgInfo, i) => {

          let classString = msgInfo?.from === uid ? "msg msg--mine" : "msg";
          let self = msgInfo?.from === uid;
          return (
            <Msg
              roomPhotoURL={roomPhotoURL}
              self={self}
              key={i}
              msgText={msgInfo?.msg}
              className={classString}
            />
          )
        })
      }
    </div>
  );
}

export default ChatboxMsgContainer;
