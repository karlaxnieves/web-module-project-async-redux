import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { fetchPerson } from '../actions';

const Joke = (props) =>{
const {joke, isFetching, error, dispatch} = props

useEffect(()=>{
dispatch(fetchPerson())
}, [])

const handleClick = () =>{
    dispatch(fetchPerson())
}

if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Get ready to laugh!</h2>;
  }

  return (
    <>
      <div>
        <h2>{joke.description}</h2>
        <h3>{joke.title}</h3>
        <h3>{joke.text}</h3>
      </div>
      <button onClick={(e)=>{ handleClick() }}>Get joke</button>
    </>
  );
};

const mapStateToProps = state => {
    return {
      joke: state.joke,
      isFetching: state.isFetching,
      error: state.error
    };

}


export default connect(mapStateToProps)(Joke);