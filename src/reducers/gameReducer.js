import sample from 'lodash/sample';
import replace from 'lodash/replace';
import {
  GET_STARTED,
  YOU_WIN,
  YOU_LOST,
  GUESS,
} from '../constants/actionTypes';
import testList from '../../data/testList';

export const initialization = {
  status: 'INIT',
  step: 0,
  question: null,
  guessed: [],
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
        guessed: initialization.guessed,
        question: getQuestion(testList),
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
    case GUESS:
      const newRecord = getGuessResult(state.question.bopomofoGuessRecord, action.bopomofo);
      return {
        ...state,
        question: {
          ...state.question,
          bopomofoGuessRecord: newRecord,
        },
        guessed: [...state.guessed, action.bopomofo],
        step: newRecord === state.question.bopomofoGuessRecord ? (state.step + 1) : state.step,
      };
    default:
      return state;
  }
}

function getQuestion(list) {
  const question = sample(list);
  const bopomofoString = question.bopomofo.toString();
  const bopomofoGuessRecord = bopomofoString.toString();
  return {
    answer: question.answer,
    bopomofoString,
    bopomofoGuessRecord,
  };
}

function getGuessResult(bopomofoString, guessedBopomofo) {
  return replace(bopomofoString, new RegExp(guessedBopomofo, 'g'), '*');
}
