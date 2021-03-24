import React, { Component } from 'react';

import FormInput    from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';

/*
    UserView : Component
        To list all generated fields and display them
*/

class UserView extends Component{
    constructor(props){
        super(props);

        this.state = {
            defaultInputValue: ""
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        alert("Passed !")
    };

    render(){
        return(
            <div className='user-view'>
                <h3 className="textCenter">User View</h3>

                <div className=''>
                    <h3>{this.props.formTitle}</h3>
                    <form onSubmit={this.handleSubmit}>
                        <table className="fullWidth">
                            <tbody>
                            {this.props.fields.map(({ id, label, type, required}) => (
                                <FormInput key={id}
                                    name={label+"-"+id}
                                    type={type}
                                    handleChange={this.handleChange}
                                    value={this.value || this.defaultInputValue}
                                    label={label}
                                    required= {required}
                                />
                            ))}
                            </tbody>
                        </table>
                        <CustomButton type='submit'> Submit </CustomButton>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserView;