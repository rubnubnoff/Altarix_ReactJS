import React from 'react';
import { writeMessage } from '../js/actions';
import { connect } from 'react-redux';

class Footer extends React.Component{
    updateValue = (e) => {
        this.props.writeMessage(e.target.value);
    }
    handleSubmit = (e) => {
        e.preventDefault();  
        if(this.props.newMessage){
            const message = {
                id: Date.now(),
                name: 'Александр Самсонов',
                text: this.props.newMessage
            };
            this.props.writeMessage('');
            this.props.sendMessage(message);
            
        }     
    }
    handleInput = (e) => {
        if((e.keyCode === 13) && e.ctrlKey) {
            e.target.value += '\n';
        } else if((e.keyCode === 13) && !e.ctrlKey) {
            this.handleSubmit(e);
        }
    }
    render(){
        return <footer className={'footer'}>
            <form className='send_form' onSubmit = {this.handleSubmit}>
                <textarea
                    className = 'send_area'
                    value = {this.props.newMessage}
                    placeholder = 'Введите ваше сообщение...'
                    onChange = {this.updateValue}
                    onKeyDown = {this.handleInput}
                >
                </textarea>
                <input 
                    className = 'send_button'
                    type = 'submit'
                    value = ''
                >
                </input>
            </form>
        </footer>;
    }
}

const mapStateToProps = state => ({
    newMessage: state.newMessage
});

const mapDispatchToProps = dispatch => ({
    writeMessage: message => dispatch(writeMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);