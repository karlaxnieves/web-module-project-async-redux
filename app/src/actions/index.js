import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";


export const getRecipe = () => {
    return (dispatch) => {
        dispatch(fetchStart());

        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => {
            console.log(res)
            // dispatch(fetchSuccess(resp.data.results[0]));
        })
        .catch(err=>{
            dispatch(fetchFail(err));
        });

    }
}


export const fetchStart = ()=> {
    return({type: FETCH_START});
}

export const fetchSuccess = (recipe)=> {
    return({type: FETCH_SUCCESS, payload:recipe});
}

export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload:error});
}