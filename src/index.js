import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './MessageList';
import {io} from "socket.io-client";

const socket = io("https://muratyapici.herokuapp.com:3001");
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