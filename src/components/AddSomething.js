
import React, { Component } from 'react';

export class AddSomething extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title : '',
      body : '',
      userId : 0
    }

    this.submitForm = this.submitForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  submitForm() {
    console.log(this.state.title)
  }

  handleChange(event) {
      let value = event.target.value
      
  }


  render() {
    return (
      <form onSubmit={this.submitForm}>
      <input type="text" onChange={this.handleChange} />
      <input type="submit" />
      </form>
    )
  }

}
