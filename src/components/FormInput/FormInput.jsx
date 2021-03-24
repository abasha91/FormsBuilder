import React from 'react';
import './FormInput.css';

/*
    FormInput : Component
    this Component should be used in side a <table> tag
    if you would like to use the input from without table, please check FormInputSingle component
*/

const FormInput = ({handleChange, label, ...otherProps}) => (
    <tr className='group'>
        <td><label className='form-input-label'>{label}</label></td>
        <td><input 
            className='form-input' 
            onChange={handleChange}
            {...otherProps}
        /></td>
    </tr>
)

export default FormInput;