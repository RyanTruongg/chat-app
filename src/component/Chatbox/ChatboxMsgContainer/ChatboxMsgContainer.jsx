import { useRef, useEffect } from 'react';

import Msg from './Msg';
import('./style.css')

const ChatboxMsgContainer = ({ msgList, uid, roomPhotoURL }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [msgList])

  return (
    <div ref={containerRef} className="chatbox-msg-container">
      {
        msgList?.map((msg, i) => {
          let classString = msg?.from === uid ? "msg msg--mine" : "msg";
          let self = msg?.from === uid;
          return <Msg roomPhotoURL={roomPhotoURL} self={self} key={i} msgText={msg?.msg} className={classString} />
        })
      }
    </div>
  );
}

export default ChatboxMsgContainer;
