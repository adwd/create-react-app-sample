import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  
  componentDidMount() {
    fetch('/todos')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(todos => this.setState({ todos: todos }))
      .catch(e => console.log(e));
  }
  
  render() {
    console.log('todos', this.state.todos);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1>todos</h1>
          <ol>
            {this.state.todos.map(todo => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
