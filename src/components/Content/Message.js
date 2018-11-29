import React from 'react';
import PropTypes from 'prop-types';
import image from '../../images/Avatar.jpg'

 const Message = React.memo(function Message({name, text}) {
    const messageClass = name !== 'Александр Самсонов' ? 'userMessage' : 'myMessage';
    return (
        <div className = {messageClass}>
            <div className = {`${messageClass}_avatar`}>
            <img src = {image} alt = 'ava'></img>
            <span>{name}</span>
            </div> 
            <div className = {`${messageClass}_text`}>{text}</div>
        </div>
    );
});

Message.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string
};
Message.defaultPpors = {
    name: 'User'
}

export default Message;