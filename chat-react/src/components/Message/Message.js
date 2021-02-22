import React from 'react';

import './Message.css';

const Message = ({ message: { messageFrom, messageText }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();
    const trimmedUser = messageFrom.trim().toLowerCase();
    if (trimmedUser === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser ?
            (
                <div className="messageConrainer justifyEnd">
                    <div className="sentText pr-10">{name}</div>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{messageText}</p>
                    </div>
                </div>
            )
            :
            (
                
                <div className="messageConrainer justifyStart">
                <div className="sentText pl-10">{messageFrom}</div>
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{messageText}</p>
                    </div>
                </div>
            )
    )
}


export default Message;