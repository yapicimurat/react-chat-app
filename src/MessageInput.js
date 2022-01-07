import React from "react";
import {socket, nickname} from "./index";

export default class MessageInput extends React.Component
{
    
    constructor(props){
        super(props);

        this.newMessage = props.newMessage;

        this.changeValue = this.changeValue.bind(this);
        this.keyDown = this.keyDown.bind(this);

        this.socket = socket;

        this.state = {
            value: ""
        };
    }

    changeValue(e){
        this.setState({
            value: e.target.value
        });
    }

    keyDown(e){
        //enter
        if(e.keyCode == 13){
            if(this.state.value == "") return;
            this.newMessage("0", nickname, this.state.value);
            this.socket.emit("server-new-message", {
                nickname: nickname,
                message: this.state.value
            });
            this.setState({
                value: ""
            });
        }
    }

    render(){
        return (
            <input className="message-input" value={this.state.value} onChange={this.changeValue} onKeyDown={this.keyDown} placeholder="Type your message..."/>
        );
    }
}
