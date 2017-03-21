import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { MAX_STEP } from '../constants/parameters';

function Hangman({ step }) {
  return (
    <div id="hangman">
      <p>{`${step} / ${MAX_STEP}`}</p>
    </div>
  );
}

Hangman.propTypes = {
  step: PropTypes.number.isRequired,
};

function mapStateToProps({ gameStore: { step } }) {
  return {
    step,
  };
}

export default connect(mapStateToProps)(Hangman);
