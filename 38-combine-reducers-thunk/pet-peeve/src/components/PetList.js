import React from 'react';
import Pet from './Pet';
import { connect } from 'react-redux';

const PetList = ({ pets }) => {
  return (
    <ul>
      {pets.map(pet => <Pet key={pet.id} pet={pet} />)}
    </ul>
  )
}

// map State to Props
function mapStateToProps(state) {
  // console.log(state);
  return {
    pets: state.pets,
  }
}

export default connect(mapStateToProps)(PetList);
