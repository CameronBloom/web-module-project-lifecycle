import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  // filtered={ this.state.filtered }
  render() {
    const { todos, filtered } = this.props;
    return (
      todos.reduce((accum, todo) => {
        if (!filtered || todo.completed === false) return accum.concat(
          <Todo key={todo.id} todo={ todo } handleToggle={ this.props.handleToggle }/>
        );
        return accum;
      }, [])
    )

    // return (
      // todos.reduce((accum, todo) => {
      //   if (!filtered || todo.completed === false) return accum.concat(todo);
      //   return accum;
      // }, [])
      // arrFiltered.map((todo) => {
      //   return (
      //     <Todo key={todo.id} todo={ todo } handleToggle={ this.props.handleToggle }/>
      //   )
      // })
    // )
  }
}
