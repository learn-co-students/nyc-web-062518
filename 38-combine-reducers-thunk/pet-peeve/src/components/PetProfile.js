import React from 'react';
import { connect } from 'react-redux';

const PetProfile = (props) => {
  const { name, age, species, gb } = props.pet;

  const adoptPet = () => {
    props.dispatch({
      type: 'REMOVE_PET',
      payload: props.pet,
    })
  }

  const likePet = () => {
    props.dispatch({
      type: 'LIKE_PET',
      payload: props.pet,
    })
  }

  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{species}</h3>
      <h4>{gb.toString()}</h4>
      <button onClick={adoptPet}>Adopt</button>
      <button onClick={likePet}>Like</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    pet: state.currentPet,
  }
}

function mapDispatchToProps() {
  return {}
}

export default connect(mapStateToProps)(PetProfile);
