import React from 'react'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      this.props["todos"].map((todo, idx) => {
        return (
          <div key={idx}>
            <div>{todo.name}</div>
          </div>
        )
      })
    )
  }
}
