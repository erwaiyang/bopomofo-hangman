import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { MAX_STEP } from '../constants/parameters';

function Hangman({ step, incorrect }) {
  return (
    <div id="hangman">
      <p>{`${step} / ${MAX_STEP}`}</p>
      <p>已猜：{incorrect.toString()}</p>
    </div>
  );
}

Hangman.propTypes = {
  incorrect: PropTypes.arrayOf(PropTypes.string).isRequired,
  step: PropTypes.number.isRequired,
};

function mapStateToProps({ gameStore: { step, incorrect } }) {
  return {
    incorrect,
    step,
  };
}

export default connect(mapStateToProps)(Hangman);
