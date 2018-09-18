import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserAction } from '../redux/actions';
import UUID from 'uuid';

class AddUserForm extends Component {
  state = {
    name: "",
    email: "",
    animalPreference: "cats", // By default, everyone loves cats! Mwahahahaha!
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.props)
    // this.props.addUser(this.state.name, this.state.email, this.state.animalPreference);
    // (name, email, animalPreference) => dispatch(addUserAction(name, email, animalPreference))
    // this.props.dispatch(addUserAction())
    this.props.dispatch(
      {
        type: 'ADD_USER',
        payload: { id: UUID(),
          name: this.state.name,
          email: this.state.email,
          animalPreference: this.state.animalPreference }
      }
    )

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label>
        <label>Email: <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/></label>
        <label>
          Cats or Dogs?:
          <select name="animalPreference" value={this.state.animalPreference} onChange={this.handleChange}>
            <option value="cats">Cats</option>
            <option value="dogs">Dogs</option>
          </select>
        </label>
        <input type="submit" value="Add User" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: (name, email, animalPreference) => dispatch(addUserAction(name, email, animalPreference))
  }
}

// connect ==> connects you to the store
//         ==> Higher Order Function
//            both take and return a function
// somethingToBeNamedSoon ===> Higher Order Component
const HOC = connect()
const ConnectedAddUserForm = HOC(AddUserForm);
export default ConnectedAddUserForm;
