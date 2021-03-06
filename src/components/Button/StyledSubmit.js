/**
  * Renders a submit input with button styles
  *
  * @namespace Button.StyledSubmit
  * @memberOf Button
  */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import buttonStyles from './buttonStyles';


const StyledInput = styled.input`
  ${buttonStyles}
`;

const StyledSubmit = props => {
  return (
    <StyledInput type="submit" value={props.children} />
  );
};

StyledSubmit.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StyledSubmit;
