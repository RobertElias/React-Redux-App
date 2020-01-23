import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchNorris } from '../actions';

const Wisdom = props => {
  return (
    <div>
      <button onClick={props.fetchNorris}>Get Chucked</button>
      {!props.value && !props.isLoading && (
        <h2>Chuck says "I dare you to try"</h2>
      )}
      {props.isLoading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      {props.value && !props.isLoading && <h2>{props.value.value}</h2>}
      
    </div>

  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    value: state.value,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchNorris }
)(Wisdom);
