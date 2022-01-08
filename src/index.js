import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './MessageList';
import {io} from "socket.io-client";

const socket = io();
let nickname = "";
console.log("uygulama baslayacak insallah v3");
socket.on("connect",() => {
  nickname = prompt("Enter a nickname");
ReactDOM.render(
  <React.StrictMode>
    <MessageList/>
  </React.StrictMode>,
  document.getElementById('root')
);
 
  
});


export {socket, nickname};