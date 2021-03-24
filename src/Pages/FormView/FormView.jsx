import React, { Component } from 'react';

import {Header}     from '../../components/Header/header';
import UserView     from '../../components/UserView/UserView';
import EditForm     from '../../components/EditForm/EditForm';
import {Footer}     from '../../components/Footer/Footer';

import FORMS_DATA   from '../../components/FormsList/FormList.data';

import './FormView.css';

/*
    FormView: it has two main Components and these two Components will be displayed at the same time. 
        1. EditForm: to edit the form by change label name, field type, and add new field
        2. UserView: the UserView form will be update on each change in the EditForm
*/

class FormView extends Component {
    constructor(props){
        super(props);

        /*
        Since the project not connect to any DB yet, we need to go through the FormListData to get the fields list by ID
        */
        
        var FORM_DATA   = [];
        var formTitle   = "";
        for (var theForm in FORMS_DATA)
            if (FORMS_DATA[theForm]["id"] == props.match.params.formId ){
                FORM_DATA   = FORMS_DATA[theForm]["fields"];
                formTitle   = FORMS_DATA[theForm]["title"];
            }

        this.state = {
            fields: FORM_DATA,
            formTitle: formTitle,
            maxId: 20 // because the project is not connected to DB, I will assume that the next id available id for new field row is 20
        }
    }

    handleChange = event => {
        const { value, name, id } = event.target;

        // To update the form on the user view; the fieldsList should be updated 
        var newFields = this.state.fields;
        if (["fieldName","fieldType","required"].includes(name)){
            for (var theForm in newFields){
                if (newFields[theForm]["id"] == id && name == 'fieldName' ){
                    newFields[theForm]["label"] = value;
                }
                if (newFields[theForm]["id"] == id && name == 'fieldType' ){
                    newFields[theForm]["type"] = value;
                }
                if (newFields[theForm]["id"] == id && name == 'required' ){
                    newFields[theForm]["required"] = !newFields[theForm]["required"];
                }
            }

            this.setState({
                fields: newFields
            })
        } else {
            this.setState({ [name]: value });
        }
    };

    handleSubmit = event => {
       event.preventDefault();
    };

    addField = () => {
        var newField = {
            id: this.state.maxId,
            label: 'New Field',
            type: 'text',
            required: false,
            order:0,
            fieldId: this.state.maxId
        }

        this.setState({
            fields: [...this.state.fields, newField],
            maxId: this.state.maxId+1
        });
    }

    render(){
        return(
            <div className='formView'>
                <Header />
                
                <EditForm 
                    formTitle={this.state.formTitle}
                    fields={this.state.fields}
                    handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange}
                    handleNewField={this.addField}
                    />

                <UserView 
                    className="user-view" 
                    formTitle={this.state.formTitle} 
                    fields={this.state.fields} 
                    />

                <Footer />
            </div>
        )
    }
}

export default FormView;