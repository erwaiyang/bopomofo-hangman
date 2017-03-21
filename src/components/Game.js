import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import Char from './Char';
import Hangman from './Hangman';
import Controls from './Controls';

function Game({ answer, bopomofoString, bopomofoGuessRecord }) {
  const record = bopomofoGuessRecord.split(',');
  return (
    <div id="game">
      <Container>
        <div id="chars">
          {
            bopomofoString.split(',').map((item, index) =>
              <Char
                key={answer[index].toString(16) + index}
                char={answer[index]}
                record={record[index]}
                original={item}
              />)
          }
        </div>
        <Hangman />
        <Controls />
      </Container>
    </div>
  );
}

Game.propTypes = {
  answer: PropTypes.string.isRequired,
  bopomofoString: PropTypes.string.isRequired,
  bopomofoGuessRecord: PropTypes.string.isRequired,
};

function mapStateToProps({ gameStore: { question } }) {
  return {
    answer: question.answer,
    bopomofoGuessRecord: question.bopomofoGuessRecord,
    bopomofoString: question.bopomofoString,
  };
}

export default connect(mapStateToProps)(Game);
