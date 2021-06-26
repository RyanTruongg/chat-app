import firebase from "firebase";
import('firebase/auth');


const firebaseConfig = {
  apiKey: "AIzaSyBtLFctIyZhPquAqnrLP8DxOCJnDv16xvI",
  authDomain: "chat-app-73a8d.firebaseapp.com",
  projectId: "chat-app-73a8d",
  storageBucket: "chat-app-73a8d.appspot.com",
  messagingSenderId: "1026946776432",
  appId: "1:1026946776432:web:0e06c59bd41ce6ea01e3b5",
  measurementId: "G-QKZ0YM2KWT"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
