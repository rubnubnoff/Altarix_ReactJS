import React from 'react';

class Footer extends React.Component{
    state = {
        value: ''
    }
    updateValue(e) {
        this.setState({ value: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.value){
            this.props.addMessage({
                id: Date.now(),
                name: '',
                text: this.state.value,
                isOutgoing: Math.round(Math.random()) ? true : false
            }); 
            this.setState({ value: '' });
        }     
    }
    render(){
        return <footer className={'footer'}>
            <form className='send_form' onSubmit = {this.handleSubmit.bind(this)}>
                <input 
                    className = 'send_area'
                    value = {this.state.value}
                    placeholder = 'Введите ваше сообщение...'
                    onChange = {this.updateValue.bind(this)}
                >
                </input>
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