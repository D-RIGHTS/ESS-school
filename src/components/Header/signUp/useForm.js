import  { useState } from "react";
import validateInfo from "./validateInfo";
import AxiosInstance from '../../../axiosInts'

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

        const errors = validateInfo(values);
        setErrors(errors)
        const isErrors = Object.keys(errors).length !== 0;
        !isErrors && setIsSubmitting(true);

        AxiosInstance.post("/users", {
            name:values.name,
            email:values.email,
            password:values.password
        }).then((response) => {
            console.log(response)
        })


    };

    return { isSubmitting, errors, values, handleChange, handleSubmit };
}

export default useForm;
