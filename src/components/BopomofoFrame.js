import React, { PropTypes } from 'react';

const BopomofoFrame = ({ bopomofos }) => (
  <div>
    <ul>
      {
        bopomofos.split('').map(b => <li key={b.charAt(0).toString(16)}>{b}</li>)
      }
    </ul>
  </div>
);

BopomofoFrame.propTypes = {
  bopomofos: PropTypes.string.isRequired,
};

export default BopomofoFrame;
