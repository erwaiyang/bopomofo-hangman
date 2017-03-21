import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Statistic } from 'semantic-ui-react';
import { MAX_STEP } from '../constants/parameters';

function Hangman({ step, guessed }) {
  return (
    <div id="hangman">
      <Statistic value={`${step} / ${MAX_STEP}`} label="機會" />
      <p>已猜：{guessed.toString()}</p>
    </div>
  );
}

Hangman.propTypes = {
  guessed: PropTypes.arrayOf(PropTypes.string).isRequired,
  step: PropTypes.number.isRequired,
};

function mapStateToProps({ gameStore: { step, guessed } }) {
  return {
    guessed,
    step,
  };
}

export default connect(mapStateToProps)(Hangman);
