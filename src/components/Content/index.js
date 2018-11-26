import React from 'react';
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
        console.log(this.props.messages);
    }
    render() {
        const messages = this.props.messages.map(message => {
            return <Message 
                key = { message.id }
                name = { message.name }
                text = { message.text }
                isOutgoing = { message.isOutgoing }        
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

export default Content;

