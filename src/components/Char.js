import React, { Component, PropTypes } from 'react';
import BopomofoFrame from './BopomofoFrame';

class Char extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { bopomofos } = this.props;
    return (
      <div className="char">
        {
          bopomofos.split('').map(b => <BopomofoFrame key={b.charAt(0).toString(16)} b={b} />)
        }
      </div>
    );
  }
}

Char.propTypes = {
  bopomofos: PropTypes.string.isRequired,
};

export default Char;
