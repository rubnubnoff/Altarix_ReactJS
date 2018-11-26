import React from 'react';
import '../App.sass';
import Header from './Header';
import Content from './Content/';
import Footer from './Footer';

class App extends React.Component {
  state = {
      messages: []
  }
  addMessage(newMessage){
    const newMessages = this.state.messages.slice();
    newMessages.push(newMessage);
    this.setState({
      messages: newMessages
    });
  }
  render() {
    return( 
      <div className = 'app'>
        <Header name = 'Ivan Ivanov' />
        <Content messages = {this.state.messages} />
        <Footer addMessage = {this.addMessage.bind(this)}  />
      </div>
    );
  }
}

export default App;
