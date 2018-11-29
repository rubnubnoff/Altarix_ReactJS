import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';


class Content extends React.Component {
    scrollToBottom = () => {
        this.messagesEnd.scrollTop = this.messagesEnd.scrollHeight;
    }
    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    render() {
        const messages = this.props.messages.map(message => {
            return <Message 
                key = { message.id }
                name = { message.name }
                text = { message.text }       
            />;
        });
        return (
            <div className = 'content'>
                <div 
                    className = 'content_container'
                    ref = {(el) => { this.messagesEnd = el }}
                >
                    {messages}
                </div>
            </div>
        );
    }  
}

Content.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object)
};


export default Content;

