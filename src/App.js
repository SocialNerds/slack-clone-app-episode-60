import React, { Component } from 'react';
import Chat from './Chat';
import './App.css';

const Store = window.require('electron').remote.require('electron-store');
const store = new Store();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null
    };
  }

  componentDidMount() {
    let name = store.get('username');
    if (name) {
      this.setState({name});
    }
  }

  logout = () => {
    store.delete('username');
    this.setState({name: null});
  }

  register = (event) => {
    event.preventDefault();
    fetch(`${this.url.value}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: this.name.value }),
    })
    .then(response => {
      console.log('logged in');
      store.set('username', this.name.value);
      this.setState({
        name: this.name.value
      })
    })
    .catch(error => console.error('error', error))
  }

  renderLogin = () => {
    return (
      <form onSubmit={this.register} className="login-form">
        <div><input required ref={c => this.name = c } type="text" placeholder="Username" /></div>
        <div><input defaultValue="http://localhost:3001" required ref={c => this.url = c } type="text" placeholder="URL" /></div>
        <div><input type="submit" value="Go!" /></div>
      </form>
    );
  }

  render() {
    const {name} = this.state;
    return (
      <div className="App">
        {!name ? this.renderLogin() : <Chat url={this.url.value} logout={this.logout} name={name}/>}
      </div>
    );
  }
}

export default App;
