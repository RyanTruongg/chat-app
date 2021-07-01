import { io } from 'socket.io-client';

// const URL = "https://msg-chatapp.herokuapp.com/";
const URL = process.env.NODE_ENV === "production" ? "https://msg-chatapp.herokuapp.com/" : "http://localhost:3001";
const socket = io(URL, { autoConnect: false });

socket.on("connect_error", () => {
  console.log('connect_error')
});

export default socket;