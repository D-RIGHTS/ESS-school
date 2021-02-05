import React, { useState, useEffect } from "react";
import validate from "./validateInfo";

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = event => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        const errors = validate(values);
        setErrors(errors)
        const isErrors = Object.keys(errors).length !== 0;
        !isErrors && setIsSubmitting(true);
    };

    return { isSubmitting, errors, values, handleChange, handleSubmit };
}

export default useForm;
