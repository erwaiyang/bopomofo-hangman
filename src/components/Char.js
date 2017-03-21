import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import BopomofoFrame from './BopomofoFrame';

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
`;

function Char({ char, record, original }) {
  return (
    <StyledChar>
      <div className="char">?</div>
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
