import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './MessageList';
import {io} from "socket.io-client";

const socket = io("http://localhost:3000");
let nickname = "";
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