import {
  GET_STARTED,
  YOU_WIN,
  YOU_LOST,
  GUESS,
} from '../constants/actionTypes';

export function getStarted() {
  return {
    type: GET_STARTED,
  };
}

export function youWin() {
  return {
    type: YOU_WIN,
  };
}

export function youLost() {
  return {
    type: YOU_LOST,
  };
}

export function guess(bopomofo) {
  return {
    type: GUESS,
    bopomofo,
  };
}
