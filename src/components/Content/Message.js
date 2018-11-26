import React from 'react';
import image from '../../images/Avatar.jpg'

 function Message(props) {
    const {name, text, isOutgoing} = props;
    const messageClass = isOutgoing ? 'userMessage' : 'myMessage';
    return (
        <div className = {messageClass}>
            <div className = {`${messageClass}_avatar`}>
            <img src = {image} alt = 'ava'></img>
            {name}
            </div> 
            <div className = {`${messageClass}_text`}>{text}</div>
        </div>
    );
}

export default Message;