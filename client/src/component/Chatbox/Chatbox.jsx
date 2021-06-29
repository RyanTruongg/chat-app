import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { useAuth } from '../../hook/use-auth';
import socket from '../../service/websocket';

import ChatboxHeader from './ChatboxHeader';
import ChatboxMsgContainer from './ChatboxMsgContainer';
import ChatboxMsgInput from './ChatboxMsgInput';

import('./chatbox.css');

const Chatbox = () => {
  const [roomInfo, setRoomInfo] = useState(null);
  const { roomID } = useParams();
  const [msgList, setMsgList] = useState([]);

  const auth = useAuth();
  const uid = auth.user?.uid;

  const pushNewMsg = useCallback((msg) => {
    let tmp = [...msgList];
    let last = tmp.pop();
    if (!last) {
      setMsgList([{ from: msg.from, msg: [msg.content] }]);
      return;
    }

    if (last?.from === msg?.from) {
      last.msg.push(msg.content)
      tmp.push(last);
    } else {
      let newMsg = { from: msg.from, msg: [msg.content] }
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
      console.log(json)
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
    socket.on("private msg", msg => {
      if (msg.from === roomID) {
        pushNewMsg(msg);
      }
    })

    return () => {
      socket.off('private msg');
    }

  }, [pushNewMsg, roomID]);

  // eslint-disable-next-line no-unused-vars
  const groupMsgList = (_msgList) => {
    console.log({ _msgList })
    _msgList = Array.from(_msgList);
    let res = []
    let tmp = { from: "", msg: [] }
    for (var _msg of _msgList) {

      if (tmp.from) {
        if (_msg.from !== tmp.from) {
          res.push(tmp);
          tmp = { from: _msg.from, msg: [_msg.content] }
        } else {

          tmp.msg.push(_msg.content)
        }
      } else {
        tmp.from = _msg.from;
        tmp.msg = [_msg.content];
      }
      // console.log({ tmp })

    }
    res.push(tmp);
    return res;
  }

  if (roomInfo) {
    return (
      <div className="chatbox">
        <ChatboxHeader {...roomInfo} />
        <ChatboxMsgContainer roomPhotoURL={roomInfo?.photoURL} uid={uid} msgList={msgList} />
        <ChatboxMsgInput pushNewMsg={pushNewMsg} roomID={roomID} uid={uid} />
      </div>
    );
  } else {
    return <p>Loading...</p>
  }


}

export default Chatbox;
