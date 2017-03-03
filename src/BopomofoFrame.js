import React, { PropTypes } from 'react';

const BopomofoFrame = ({ char, bopomofos }) => (
  <div>
    <div className="char">{char}</div>
    <ul>
      {
        bopomofos.split('').map(b => <li key={b.charAt(0).toString(16)}>{b}</li>)
      }
    </ul>
  </div>
);

BopomofoFrame.propTypes = {
  char: PropTypes.string.isRequired,
  bopomofos: PropTypes.string.isRequired,
};

export default BopomofoFrame;
