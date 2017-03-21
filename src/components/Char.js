import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import indexOf from 'lodash/indexOf';
import BopomofoFrame from './BopomofoFrame';
import { accents } from '../constants/parameters';

const StyledChar = styled.div`
  display: inline-block;
  margin: 0 1rem;
  .char, .bopomofos {
    display: inline-block;
    vertical-align: middle;
  }
  .char {
    font-size: 2rem;
    margin-right: 1rem;
  }
  .bopomofos {
    width: 5rem;
  }
`;

function Char({ char, record, original, showAnswer }) {
  return (
    <StyledChar>
      <div className="char">{ showAnswer ? char : '？' }</div>
      <div className="bopomofos">
        {
          record
            .split('')
            .map((b, index) => {
              const originalBopomofo = original[index];
              return (
                <BopomofoFrame
                  key={originalBopomofo.charAt(0).toString(16)}
                  b={b === '*' ? originalBopomofo : ' '}
                  isAccent={indexOf(accents, originalBopomofo) >= 0}
                />
              );
            })
        }
      </div>
    </StyledChar>
  );
}

Char.propTypes = {
  char: PropTypes.string.isRequired,
  record: PropTypes.string.isRequired,
  original: PropTypes.string.isRequired,
};

export default Char;
