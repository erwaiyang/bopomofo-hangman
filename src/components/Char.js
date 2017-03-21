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

class Char extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { char, bopomofos } = this.props;
    return (
      <StyledChar>
        <div className="char">{char}</div>
        <div className="bopomofos">
          {
            bopomofos
              .split('')
              .map(b => <BopomofoFrame key={b.charAt(0).toString(16)} b={b} />)
          }
        </div>
      </StyledChar>
    );
  }
}

Char.propTypes = {
  char: PropTypes.string.isRequired,
  bopomofos: PropTypes.string.isRequired,
};

export default Char;
