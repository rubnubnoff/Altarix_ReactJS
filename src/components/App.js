import React from 'react';
import '../App.sass';
import _ from 'lodash';
import Header from './Header';
import Content from './Content/';
import Footer from './Footer';
import { db } from '../firebase';
import { connect } from 'react-redux';
import { addMessages } from '../js/actions'



class App extends React.Component {

  componentDidMount() {
    const messagesRef = db.ref('messages');

    messagesRef.on('value', (snapshot) => {
      const messages = snapshot.val();
      this.props.addMessages(_.toArray(messages));
    });
    
  }
  sendMessage = (message) => {
    db.ref(`/messages/${message.id}`).set(message);
  }
  render() {
    return( 
      <div className = 'app'>
        <Header name = 'Александр Самсонов' />
        <Content messages = { this.props.store.messages } />
        <Footer sendMessage = { this.sendMessage } />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state
});
const mapDispatchToProps = dispatch => ({
  addMessages: messages => dispatch(addMessages(messages))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
