import React from 'react';
import './FormInput.css';

const SingleFormInput = ({handleChange, label, ...otherProps}) => (
   <input 
        className='form-input' 
        onChange={handleChange}
        {...otherProps}
    />
)

export default SingleFormInput;