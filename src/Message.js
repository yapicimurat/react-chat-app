import React from "react";

export default class MessageList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.type = props.type;
        this.nickname = this.props.nickname;
        this.message = this.props.message;

    }
    static get MESSAGE_TYPES(){
        return {
            OWN_MESSAGE: "0",
            OTHER_MESSAGE: "1"
        };
    }

    applyMessageType(){
        if(this.type == MessageList.MESSAGE_TYPES.OWN_MESSAGE){
            return "message message-own";
        }
        return "message";
    }

    render(){
        return (
            <div className="message-row">
                <div className={this.applyMessageType()}>
                    <h5>{this.nickname}</h5>
                    <p>{this.message}</p>
                </div>
            </div>
            
        );
    }

}