import { io } from 'socket.io-client';

const URL = "https://msg-chatapp.herokuapp.com/";
const socket = io(URL, { autoConnect: false });

socket.on("connect_error", () => {
  console.log('connect_error')
});

export default socket;