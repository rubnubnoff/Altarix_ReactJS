import React from 'react';

class Footer extends React.Component{
    state = {
        value: ''
    }
    updateValue = (e) => {
        this.setState({ value: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();  
        if(this.state.value){
            const message = {
                id: Date.now(),
                name: 'Александр Самсонов',
                text: this.state.value
            };
            this.setState({ value: '' });
            this.props.sendMessage(message);
        }     
    }
    handleInput = (e) => {
        if((e.keyCode === 13) && e.ctrlKey) {
            e.target.value += '\n';
        }
    }
    render(){
        return <footer className={'footer'}>
            <form className='send_form' onSubmit = {this.handleSubmit}>
                <textarea
                    className = 'send_area'
                    value = {this.state.value}
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

export default Footer;