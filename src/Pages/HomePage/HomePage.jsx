import React, { Component } from 'react';

import {Header}   from '../../components/Header/header';
import FormsList  from '../../components/FormsList/FormsList';
import { Footer } from '../../components/Footer/Footer';

import FORMS_DATA from '../../components/FormsList/FormList.data';

import './HomePage.css';

/*
    Home Page:
        Goal: to display the list of all forms and give the ablity to add new froms
        Methods:
            constructor: to set the state values
                -- forms: load the forms data from external file "FormList.data.js"
                -- maxFormId: because the project is not connected with DB, I assumed the next available id will be 100
            handleSubmit: to add new from to the forms list
*/

class HomePage extends Component{
    constructor(){
        super();

        this.state = {
            forms: FORMS_DATA,
            maxFormId: 100
        }
    }
    
    handleSubmit = event => {
        var newForm = {
            id: this.state.maxFormId,
            title: 'My New Form',
            linkUrl: 'FormView',
            fields: []
        }

        this.setState({
            forms: [...this.state.forms , newForm],
            maxFormId: this.state.maxFormId+1
        })
     };

    render(){
        return(
            <div className='homePage'>
                <Header />
                <FormsList forms={this.state.forms} handleSubmit={this.handleSubmit} />
                <Footer />
            </div>
        )
    }
}

export default HomePage;