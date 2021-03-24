import React from 'react';

import FormElement from '../FormElement/FormElement';

import './FormsList.css';

/*
    FormsList: Component
    Goal: Return the main Table for a list of forms
*/

class FormsList extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className='form-list'>
                <FormElement key="0" title="+Add New Form" handlerSubmit={this.props.handleSubmit} />
                {this.props.forms.map(({...otherSectionProps }) => (
                    <FormElement  {...otherSectionProps} />
                ))}
            </div>
        )
    }
}

export default FormsList;