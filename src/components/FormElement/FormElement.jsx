import React from 'react';
import { withRouter } from 'react-router-dom';

import './FormElement.css';

/*
    FormElement: Component
*/

const FormElement = ({id, title, history, linkUrl, match, handlerSubmit }) => (
    <div key={id} 
        className='form-container'
        onClick={
            () => {
                handlerSubmit !== undefined ? handlerSubmit() : history.push(`${match.url}${linkUrl}/${id}`)
            }
        }
    >
        {title}
    </div>
);

export default withRouter(FormElement);