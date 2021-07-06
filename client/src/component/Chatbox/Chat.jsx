import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { useAuth } from '../../hook/use-auth';
import { useContactList } from '../../hook/use-contact-list';
import socket from '../../service/websocket';

import ChatHeader from './ChatHeader';
import ChatMsgContainer from './MsgContainer';
import MsgForm from './MsgForm';

import './chat.css';

const Chat = () => {
  const [roomInfo, setRoomInfo] = useState(null);
  const { roomID } = useParams();
  const [msgList, setMsgList] = useState([]);

  const auth = useAuth();
  const uid = auth.user?.uid;

  const { updateContactLastMsg } = useContactList();

  const pushNewMsg = useCallback((msg) => {
    let tmp = [...msgList];
    let last = tmp.pop();

    const msgContentAndTime = {
      timestamp: msg.timestamp,
      content: msg.content
    };
    if (!last) {
      setMsgList([{ from: msg.from, msg: [msgContentAndTime] }]);
      return;
    }

    if (last?.from === msg?.from) {
      last.msg.push(msgContentAndTime)
      tmp.push(last);
    } else {
      let newMsg = { from: msg.from, msg: [msgContentAndTime] }
      tmp.push(last);
      tmp.push(newMsg)
    }

    setMsgList(tmp);
  }, [msgList])

  useEffect(() => {
    const res = fetch("/api/user/" + roomID);
    const json = res.then(res => res.json());
    json.then(json => {
      setRoomInfo(json);
      // console.log(json)
    }).catch(e => {
      console.log(e)
    })
  }, [roomID]);

  useEffect(() => {
    const res = fetch(`/api/message?from=${uid}&to=${roomID}`);
    const json = res.then(res => res.json());
    json.then(json => {
      const sorted = [...json].sort((a, b) => a.timestamp - b.timestamp);
      const group = groupMsgList(sorted);
      setMsgList(group)
    })

  }, [roomID, uid])

  useEffect(() => {
    socket.on("private msg", ({ doc }) => {
      if (doc.from === roomID) {
        pushNewMsg(doc);
      }
      updateContactLastMsg(doc.from, doc);
    })

    return () => {
      socket.off('private msg');
    }

  }, [pushNewMsg, roomID, updateContactLastMsg]);

  const groupMsgList = (_msgList) => {
    _msgList = Array.from(_msgList);
    let res = []
    let tmp = { from: "", msg: [] }
    for (var _msg of _msgList) {
      const msgContentAndTime = {
        timestamp: _msg.timestamp,
        content: _msg.content
      };
      if (tmp.from) {
        if (_msg.from !== tmp.from) {
          res.push(tmp);
          tmp = { from: _msg.from, msg: [msgContentAndTime] }
        } else {
          tmp.msg.push(msgContentAndTime)
        }
      } else {
        tmp.from = _msg.from;
        tmp.msg = [msgContentAndTime];
      }
      // console.log({ tmp })
    }
    if (tmp.from) res.push(tmp);

    return res;
  }

  if (roomInfo?.uid === roomID) {
    return (
      <div className="chat">
        <ChatHeader {...roomInfo} />
        <ChatMsgContainer
          roomPhotoURL={roomInfo?.photoURL}
          uid={uid}
          msgList={msgList} />
        <MsgForm
          pushNewMsg={pushNewMsg}
          roomID={roomID}
          uid={uid} />
      </div>
    );
  } else {
    return <p>Loading...</p>
  }


}

export default Chat;
