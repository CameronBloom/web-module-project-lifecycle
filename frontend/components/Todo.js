import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.handleToggle(this.props.todo.id);
  }

  render() {
    const { id, name, completed } = this.props.todo;

    return (
      <div onClick={ this.handleClick }>
        <p>{id}</p>
        <p>{name}</p>
        <p>{completed ? " - complete!" : " - incomplete :("} </p>
      </div>
    )
  }
}
