import React from 'react';
import _ from 'lodash';
import '../App.sass';
import Header from './Header';
import Content from './Content/';
import Footer from './Footer';
import { db } from '../firebase';


class App extends React.Component {
  state = {
      messages: []
  }
  sendMessage(message) {
    db.ref(`/messages/${message.id}`).set(message);
  }
  componentDidMount() {
    const messagesRef = db.ref('messages');

    messagesRef.on('value', (snapshot) => {
      const messages = snapshot.val();
      
      this.setState({
        messages: _.toArray(messages)
      });
    });
    
  }
  render() {
    return( 
      <div className = 'app'>
        <Header name = 'Александр Самсонов' />
        <Content messages = {this.state.messages} />
        <Footer sendMessage = { this.sendMessage }/>
      </div>
    );
  }
}

export default App;
