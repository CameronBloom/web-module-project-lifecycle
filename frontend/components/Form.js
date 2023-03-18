import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { newTodo } = this.props;
    return (
      <>
        {console.log(this.props)}
        <input 
          type="text" 
          value={ newTodo } 
          onChange={this.props.handleInputChange}
          placeholder="What would you like to add?" 
        />
        <input type="submit"></input>
        <button>Clear Completed</button>
      </>
    )
  }
}
