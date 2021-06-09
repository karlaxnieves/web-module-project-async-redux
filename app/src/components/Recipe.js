import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Recipe = (props) =>{
    const { recipe, isFetching, error } = props;
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
      return <h2>Fetching person for ya!</h2>;
    }
  
    return (
      <>
        <div>
          <h2>Today we are making: {recipe.strMeal}</h2>
          <h2>This dish is a {recipe.strArea} classic</h2>
        <h2>Instructions: {recipe.strInstructions}</h2>
        </div>
        <button onClick={handleClick}>Get new recipe</button>
      </>
    );
  };
  
  const mapStateToProps = state => {
    return {
      recipe: state.recipe,
      isFetching: state.isFetching,
      error: state.error
    };

}

export default connect(mapStateToProps, { getRecipe })(Recipe);