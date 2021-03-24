import React from 'react';

import './CustomButton.css'

/*
  CustomButton: Component
*/

const CustomButton = ({ children, ...otherProps }) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;