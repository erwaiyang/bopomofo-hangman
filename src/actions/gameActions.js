import {
  GET_STARTED,
  YOU_WIN,
  YOU_LOST,
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
