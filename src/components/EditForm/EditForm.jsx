import React, { Component } from 'react';

import AddNewField      from '../../components/AddNewField/AddNewField';
import CustomButton     from '../../components/CustomButton/CustomButton';
import SingleFormInput  from '../../components/FormInput/FormInputSingle';
import HomePage from '../../Pages/HomePage/HomePage';

/*
    EditForm: Component
    this page uses the "Parent" state, as every change happens on the Edit will affect the UserView 
*/

class EditForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            handleSubmit: props.handleSubmit,
            handleChange: props.handleChange,
            handleNewField: props.handleNewField,
            formTitle: props.formTitle,
            action: props.action || "Edit Form",
            defaultInputValue: ""
        }
    }

    render(){
        return (
            <div className='form-view'>
                <h3 className="textCenter">{this.state.action}</h3>
                <form onSubmit={this.state.handleSubmit}>
                    <SingleFormInput 
                        className='form-input-large'
                        name='formTitle'
                        type='text'
                        handleChange={this.state.handleChange}
                        defaultValue={this.state.formTitle}
                        label=''
                        placeholder='Form Title'
                        required
                    />
                    <div >
                        {this.props.fields.map(({id, ...otherProps}) => (
                            <AddNewField key={id} handleChange={this.state.handleChange} fieldId={id} {...otherProps} />
                        ))}
                    </div>
                    <CustomButton id='newFieldBtn' onClick={this.state.handleNewField} > +Add New field </CustomButton> <br />
                    <CustomButton id='submitBtn' type='submit' onClick={() => window.location = "/"} > Save </CustomButton>
                </form>
            </div>
        )
    }
}

export default EditForm;