import React from 'react';
import './FormArea.scss'
//import '../../css/commons/FormArea/FormArea.css';

const FormControl = ({ input, element, meta: { touched, error }, ...props }) => {
    const ErrorStatus = (touched && error);
    const CustomTag = () => {
        return (React.createElement(
            `${element}`,
            {
                ...input,
                ...props
            },
            null
        ))
    }
    return (
        (ErrorStatus)
            ? <div className="formControl-error">
                {CustomTag()}
                <span>{error}</span>
            </div>
            : <div className="formControl">
                {CustomTag()}
            </div>
    );
}



export const Input = (props) => {
    return <FormControl element={"input"} {...props} />
}

export const MessageArea = (props) => {
    return <FormControl element={"textarea"} {...props} />
}


export const InputEdit = ({ input, meta: { touched, error }, ...props }) => {
    const ErrorStatus = (touched && error);
    const CustomTag = () => {
        return (React.createElement(
            `input`,
            {
                ...input,
                ...props
            },
            null
        ))
    }
    return (
        (ErrorStatus)
            ? <div className="formControlEdit-error">
                {CustomTag()}
                <span>{error}</span>
            </div>
            : <div className="formControlEdit">
                {CustomTag()}
            </div>
    );
}