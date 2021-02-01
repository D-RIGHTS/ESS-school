import React from "react";

export const SignInInputs = ({
                           label,
                           fieldName,
                           placeholder,
                           values,
                           fieldType}) =>
    <>
        <label htmlFor="{fieldName}">{label}</label>
        <input
            id={fieldName}
            type={fieldType || 'text'}
            name={fieldName}
            placeholder={placeholder}
            value={values[fieldName]}
            onChange={onchange}
            required=""
        />
        {/*{errors[fieldName] && <p>{errors[fieldName]}</p> }*/}

    </>

