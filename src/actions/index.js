import axios from 'axios';

export const fetchActivity = () => dispatch => {
  dispatch({ type: 'FETCHING_ACTIVITY_START' });
  axios
    .get('https://www.boredapi.com/api/activity')
    .then(res => {
      //res.data ==> activity
      dispatch({ type: 'FETCHING_DATA_SUCCESS', payload: res.data });
    })
    .catch(err => console.log(err));
};