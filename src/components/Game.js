import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import Char from './Char';
import Hangman from './Hangman';
import Controls from './Controls';

function Game({ answer, bopomofoString, bopomofoGuessRecord, showAnswer }) {
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
                showAnswer={showAnswer}
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
  showAnswer: PropTypes.bool.isRequired,
};

function mapStateToProps({ gameStore: { question, showAnswer } }) {
  return {
    answer: question.answer,
    bopomofoGuessRecord: question.bopomofoGuessRecord,
    bopomofoString: question.bopomofoString,
    showAnswer,
  };
}

export default connect(mapStateToProps)(Game);
