import axios from 'axios';

export const fetchNorris = () => dispatch => {
  dispatch({ type: 'FETCHING_ACTIVITY_START' });
  axios
    .get('https://api.chucknorris.io/jokes/random')
    .then(res => {
        console.log(res.data)
      //res.data ==> activity
      dispatch({ type: 'FETCHING_DATA_SUCCESS', payload: res.data });
    })
    .catch(err => console.log("There was an erro getting photos",err));
};