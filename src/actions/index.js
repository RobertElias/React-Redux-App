import axios from 'axios';

export const fetchActivity = () => dispatch => {
  dispatch({ type: 'FETCHING_ACTIVITY_START' });
  axios
    .get('https://api.nasa.gov/planetary/apod?api_key=YvRdRgaQrdbXP78gKmVFQ5osJmsSyrjwQ8gflbH6')
    .then(res => {
        console.log(res.data)
      //res.data ==> activity
      dispatch({ type: 'FETCHING_DATA_SUCCESS', payload: res.data });
    })
    .catch(err => console.log("There was an erro getting photos",err));
};