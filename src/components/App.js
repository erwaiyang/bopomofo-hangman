import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Button } from 'semantic-ui-react';
import { GET_STARTED, YOU_WIN, YOU_LOST } from '../constants/actionTypes';
import { getStarted } from '../actions/gameActions';
import Game from './Game';

function App(props) {
  const { status } = props;
  return (
    <div id="app">
      <Container>
        <Header as="h1">注音吊死鬼</Header>
        {
          status === 'INIT' &&
            <Button primary onClick={() => props.getStarted()}>開始遊戲</Button>
          ||
          status === GET_STARTED &&
            <Game />
        }
      </Container>
    </div>
  );
}

App.propTypes = {
  status: PropTypes.string.isRequired,
  getStarted: PropTypes.func.isRequired,
};

function mapStateToProps({ gameStore }) {
  return {
    status: gameStore.status,
  };
}

export default connect(mapStateToProps, { getStarted })(App);
