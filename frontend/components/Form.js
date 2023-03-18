import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { newTodo, filtered } = this.props;
    return (
      <>
        {console.log(this.props)}
        <input 
          type="text" 
          value={ newTodo } 
          onChange={ this.props.handleInputChange }
          placeholder="What would you like to add?" 
        />
        <input 
          type="submit"
          onClick={ this.props.handleSubmit }
        />
        <button onClick={ this.props.handleIncomplete }>{ filtered ? "Show" : "Hide" } Completed</button>
      </>
    )
  }
}
