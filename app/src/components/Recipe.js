import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getRecipe }  from './../actions';

const Recipe = (props) =>{
    const { meal, isFetching, error } = props;
    useEffect(() => {
      props.getRecipe();
    }, []);
  
    const handleClick = () => {
      props.getRecipe();
    }
  
    if (error) {
      return <h2>We got an error: {error}</h2>;
    }
  
    if (isFetching) {
      return <h2>Hold while we fetch your next meal!</h2>;
    }
  
    return (
      <>
        <div>
          <h2>Today we are making: {meal.strMeal}</h2>
          <h2>This dish is a  classic {meal.strArea}</h2>
        <h2>Instructions: {meal.strInstructions}</h2>
        </div>
        <button onClick={handleClick}>Get new recipe</button>
      </>
    );
  };
  
  const mapStateToProps = state => {
    return {
      meal: state.meal,
      isFetching: state.isFetching,
      error: state.error
    };

}

export default connect(mapStateToProps, { getRecipe })(Recipe);