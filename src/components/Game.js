import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import Char from './Char';

function Game({ answer, bopomofo }) {
  return (
    <div id="game">
      <Container>
        {
          answer.split('').map((char, index) =>
            <Char
              key={char.toString(16) + index}
              char={char}
              bopomofos={bopomofo[index]}
            />)
        }
      </Container>
    </div>
  );
}

Game.propTypes = {
  answer: PropTypes.string.isRequired,
  bopomofo: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToProps({ gameStore: { question } }) {
  return {
    answer: question.answer,
    bopomofo: question.bopomofo,
  };
}

export default connect(mapStateToProps)(Game);
