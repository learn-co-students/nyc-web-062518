import React from 'react';
import { connect } from 'react-redux';

const Pet = (props) => {
  console.log(props);
  const { name, age, species, gb } = props.pet;

  // const handleClick = () => {
  //   // dispatch select pet action
  //   // send this action to your store using dispatch
  //   // tell your store to select this pet // set your pet
  //   props.dispatch({
  //     type: 'SELECT_PET', // OPEN_PROFILE, CHANGE_PROFILE, CHANGE_DISPLAY_PET
  //     payload: props.pet,
  //   })
  // }

  return (
    <li onClick={() => props.selectPet(props.pet)}>
      {`${name} | ${age} | ${species} | ${gb}`}
    </li>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    selectPet: (pet) => {
      dispatch({
        type: 'SELECT_PET', // OPEN_PROFILE, CHANGE_PROFILE, CHANGE_DISPLAY_PET
        payload: pet,
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Pet);
