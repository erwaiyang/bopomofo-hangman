import React, { PropTypes } from 'react';

const BopomofoFrame = ({ b }) => (
  <div>
    <input type="text" value={b} size={2} />
  </div>
);

BopomofoFrame.propTypes = {
  b: PropTypes.string.isRequired,
};

export default BopomofoFrame;
