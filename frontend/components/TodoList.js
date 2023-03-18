import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      this.props["todos"].map((todo, idx) => {
        return (
          <div key={idx}>
            <Todo todo={ todo }/>
          </div>
        )
      })
    )
  }
}
