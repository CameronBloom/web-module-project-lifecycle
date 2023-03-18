import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.handleToggle(this.props.todo.id);
  }

  render() {
    const { name, completed } = this.props.todo;

    return (
      <div style={{margin: "1rem auto"}} onClick={ this.handleClick }>
        <p>{name}{completed ? " - complete!" : " - incomplete"} </p>
      </div>
    )
  }
}