import { useRef, useEffect } from "react";

import MsgBlock from "./MsgBlock";
import "./msg_container.css";

const MsgContainer = ({ msgList, uid, roomPhotoURL }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [msgList]);

  return (
    <div ref={containerRef} className="chatbox-msg-container">
      {msgList?.map((msgInfo) => {
        let classString = msgInfo?.from === uid ? "msg msg--mine" : "msg";
        let self = msgInfo?.from === uid;
        return (
          <MsgBlock
            className={classString}
            self={self}
            roomPhotoURL={roomPhotoURL}
            key={msgInfo._id}
            msgText={msgInfo?.msg}
          />
        );
      })}
    </div>
  );
};

export default MsgContainer;
