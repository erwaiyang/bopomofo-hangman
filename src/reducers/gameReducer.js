import sample from 'lodash/sample';
import {
  GET_STARTED,
  YOU_WIN,
  YOU_LOST,
} from '../constants/actionTypes';
import testList from '../../data/testList';

export const initialization = {
  status: 'INIT',
  step: 0,
  question: null,
  incorrect: [],
};

export default function gameReducer(state = initialization, action) {
  switch (action.type) {
    case GET_STARTED:
      return {
        ...state,
        status: GET_STARTED,
        step: initialization.step,
        incorrect: initialization.incorrect,
        question: sample(testList),
      };
    case YOU_WIN:
      return {
        ...state,
        status: YOU_WIN,
      };
    case YOU_LOST:
      return {
        ...state,
        status: YOU_LOST,
      };
    default:
      return state;
  }
}
