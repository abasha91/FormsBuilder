import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';

import './AddNewFields.css'

/*
   AddNewField: Component
*/

class AddNewField extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            label: props.label || "",
            type: props.type,
            required: props.required,
            order:props.order,
            value:props.value || "",
            handleChange:props.handleChange,
            defaultInputValue: "",
            fieldId:props.fieldId
        }
    }

    render() {
        return (
            <table className="inputs-group fullWidth">
                <tbody>
                <FormInput
                    name='fieldName'
                    type='text'
                    handleChange={this.state.handleChange}
                    defaultValue={this.state.label}
                    label='Field Name'
                    id={this.state.fieldId}
                    required
                />
                <tr>
                <td><label>Type</label></td>
                <td><select 
                        id={this.state.fieldId}
                        name='fieldType' 
                        onChange={this.state.handleChange} 
                        className="form-input" 
                        defaultValue={this.state.type || this.defaultInputValue} 
                        required
                    >
                    <option value="text">Text</option>
                    <option value="password">Password</option>
                    <option value="email">Email</option>
                    <option value="tel">Phone Number</option>
                    <option value="checkbox">CheckBox</option>
                </select>
                </td>
                </tr>
                <FormInput
                    id={this.state.fieldId}
                    handleChange={this.state.handleChange}
                    name='required'
                    type='checkbox'
                    defaultValue={this.state.required}
                    label='Required'
                    defaultChecked={this.state.required}
                />
                </tbody>
          </table>
        );
      }
}

export default AddNewField;