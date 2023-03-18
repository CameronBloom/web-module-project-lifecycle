import React from 'react'
import axios from 'axios'
const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
    this.getTodos = this.getTodos.bind(this);
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
        return res.data.data;
      })
      .then((res) => { console.log(res) })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
      </div>

    )

  }
}
