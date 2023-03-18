import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, completed } = this.props.todo;

    return (
      <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{completed}</p>
      </div>
    )
  }
}
