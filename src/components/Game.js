import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import Char from './Char';

function Game({ bopomofo }) {
  return (
    <div id="game">
      <Container>
        {
          bopomofo.map((item, index) => <Char key={index} bopomofos={item} />)
        }
      </Container>
    </div>
  );
}

Game.propTypes = {
  bopomofo: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToProps({ gameStore }) {
  return {
    bopomofo: gameStore.question.bopomofo,
  };
}

export default connect(mapStateToProps)(Game);
