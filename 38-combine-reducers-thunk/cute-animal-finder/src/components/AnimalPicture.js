import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAnimalAction, fetchedCatAction } from '../redux/actions';
import { UPDATE_ANIMAL } from '../redux/types';
import AnimalAdapter from '../apis/AnimalAdapter';
// import * as actions from '../actions'

// Adapter Pattern - abstract away your API calls
class AnimalPicture extends Component {
  // state = {
  //   url: ""
  // }

  getCat = (event) => {
    // AnimalAdapter.getCat()
    //   .then(url => {
    //     // this.setState({ url })
    //     this.props.dispatch({
    //       type: UPDATE_ANIMAL,
    //       payload: url
    //     })
    //
    //     // this.props.updateAnimal(url);
    //   })

      this.props.fetchCat();
  }

  getDog = (event) => {

    // AnimalAdapter.getDog()
    //   .then(url => {
    //     // this.setState({ url })
    //     // this.props.dispatch({
    //     //   type: UPDATE_ANIMAL,
    //     //   payload: url
    //     // })
    //     this.props.updateAnimal(url);
    //   })
    this.props.fetchDog();
  }

  renderPicture = () => {
    if (!this.props.isFetching) {
      return <img src={this.props.animalSrc} alt="cute animal" />
    } else {
      return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
    }
  }

  render() {
    return (
      <div className="animal-picture">
        <button onClick={this.getCat}>Fetch Cat</button>
        <button onClick={this.getDog}>Fetch Dog</button>
        {this.renderPicture()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    animalSrc: state.animal.animalSrc,
    isFetching: state.animal.isFetching,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateAnimal: (url) => dispatch(updateAnimalAction(url)),
    // fetchCat: () => dispatch(fetchedCatAction()),
    fetchCat: () => {
      console.log('fetchedCatAction', fetchedCatAction())
      dispatch(fetchedCatAction());
      // AnimalAdapter.getCat()
      //   .then(url => {
      //     dispatch(updateAnimalAction(url))
      //   })
    },
    fetchDog: () => {},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalPicture);
