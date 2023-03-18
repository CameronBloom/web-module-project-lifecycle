import React from 'react'
import axios from 'axios'

import TodoList from './TodoList'
import Form from './Form'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      error: "",
      newTodo: "",
      filtered: false
    }
    this.getTodos = this.getTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  // runs after first render
  componentDidMount() {
    this.getTodos();

  }

  // helper functions
  getTodos = () => {
    axios.get(URL)
      .then((res) => {
        this.setState({ ...this.state, todos: res.data.data })
      })
      .catch(err => {
        this.setState({ ...this.state, error: err.response.data.message })
      })
  }

  addTodo = () => {
    axios.post(URL, { name: this.state.newTodo })
      .then((res) => { 
        this.setState({ ...this.state, todos: this.state.todos.concat(res.data.data) })
       })
      .catch(err => {
        this.setState({ ...this.state, error: err.response.data.message })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addTodo();
    this.setState({ ...this.state, newTodo: "" })
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ ...this.state, newTodo: value });
  }

  handleToggle = (currentID) => {
    const { todos } = this.state;
    const clickedID = currentID;

    axios.patch(`${URL}/${clickedID}`)
      .then(res => {
        this.setState({
          ...this.state, todos: todos.map((todo) => {
            if (todo.id === clickedID) {
              return res.data.data
            }
            return todo;
          })
        })
      })
      .catch(err => {
        this.setState({ ...this.state, error: err.response.data.message })
      })
  }

  handleIncomplete = () => {
    const { filtered } = this.state;
    if (filtered === false) {
      this.setState({
        ...this.state, 
        filtered: true
      })
    } else {
      this.setState({
        ...this.state, 
        filtered: false
      })
    }
 
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <div className="error">{ this.state.error ? this.state.error : "" }</div>
        <TodoList todos={ this.state.todos } handleToggle={ this.handleToggle } filtered={ this.state.filtered }/>
        <Form newTodo={ this.state.newTodo } handleInputChange={ this.handleInputChange } handleSubmit={ this.handleSubmit } handleIncomplete={ this.handleIncomplete } filtered={ this.state.filtered }/>
      </div>

    )

  }
}
