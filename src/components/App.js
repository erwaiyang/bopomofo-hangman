import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { GET_STARTED, YOU_WIN, YOU_LOST } from '../constants/actionTypes';
import Game from './Game';

function App({ status }) {
  return (
    <div id="app">
      <h1>注音吊死鬼</h1>
      {
        status === 'INIT' &&
          <button>開始遊戲</button>
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
