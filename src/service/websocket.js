import { io } from 'socket.io-client';

const URL = "http://localhost:3001";
const socket = io(URL, { autoConnect: false });

socket.on("connect_error", () => {
  console.log('connect_error')
});

export default socket;