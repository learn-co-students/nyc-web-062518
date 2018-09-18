import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadPet } from '../actions';

class UploadForm extends Component {
  state = {
    name: "",
    age: 0,
    species: "",
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log('UploadForm', this.state, this.props);
    this.props.uploadPet(this.state.name, this.state.age, this.state.species);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label>
        <label>Age: <input type="number" name="age" value={this.state.age} onChange={this.handleChange}/></label>
        <label>Species: <input type="text" name="species" value={this.state.species} onChange={this.handleChange}/></label>
        <input type="submit" value="Add Pet" />
      </form>
    )
  }
}

export default connect(null, { uploadPet })(UploadForm);
