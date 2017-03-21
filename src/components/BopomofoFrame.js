import React, { PropTypes } from 'react';
import styled from 'styled-components';

const StyledFrame = styled.div`
  float: ${props => props.isAccent ? 'right' : 'initial'};
`;

const BopomofoFrame = ({ b, isAccent }) => (
  <StyledFrame isAccent={isAccent} >
    <input type="text" value={b} size={2} disabled />
  </StyledFrame>
);

BopomofoFrame.propTypes = {
  b: PropTypes.string.isRequired,
  isAccent: PropTypes.bool.isRequired,
};

export default BopomofoFrame;
