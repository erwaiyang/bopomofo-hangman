import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header, Button } from 'semantic-ui-react';
import { GET_STARTED, YOU_WIN, YOU_LOST } from '../constants/actionTypes';
import Game from './Game';

function App({ status }) {
  return (
    <div id="app">
      <Header as="h1">注音吊死鬼</Header>
      {
        status === 'INIT' &&
          <Button primary>開始遊戲</Button>
        ||
        status === GET_STARTED &&
          <Game />
      }
    </div>
  );
}

App.propTypes = {
  status: PropTypes.string.isRequired,
};

function mapStateToProps({ gameStore }) {
  return {
    status: gameStore.status,
  };
}

export default connect(mapStateToProps)(App);
