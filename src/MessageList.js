import React, { createRef } from "react";
import "./style.css";
//components
import Message from "./Message";
import Input from "./MessageInput";

import {socket, nickname} from "./index";


export default class MessageList extends React.Component
{
    constructor(props){
        super(props);

        this.messages = [];
        this.counter = 0;
        this.state = {
            messages: null
        };

        this.newMessage = this.newMessage.bind(this);
        this.myRef = React.createRef();
        this.socket = socket;

        this.socket.on("client-new-message",(data) => {
            this.newMessage("1", data.nickname, data.message);
        });
    }
    
    newMessage(type, nickname, message){
        this.messages.push({
            type: type,
            nickname: nickname,
            message: message
        });

        this.setState({
            messages: this.messages
        });

    }

    componentDidUpdate(){
        //scrollY go to bottom after render
        this.myRef.current.scrollTo(0, this.myRef.current.scrollHeight);
    }

    render(){
        return (
            <div className="message-list">
                <h3>Chat History</h3>
                <div ref={this.myRef} className="messages-area">
                    {this.state.messages != null &&
                    this.state.messages.map(message => {
                        return (
                            <Message key={this.counter++} type={message.type} nickname={message.nickname} message={message.message}/>
                        )
                    })}
                </div>
                <div className="input-area">
                    <Input newMessage={this.newMessage}/>
                </div>
            </div>
        );
            
    }

}