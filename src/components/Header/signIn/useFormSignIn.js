import {useState} from "react";
import validateInfo from "./signInValidateInfo";
import axios from "axios";
import AxiosInstance from "../../../axiosInts"

const useFormSignIn = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = event => {
      const  { name, value } = event.target
        setValues({...values, [name] : value });
    };

    const handleSubmit = event => {
        event.preventDefault();

        const errors = validateInfo(values)
        setErrors(errors);

        const isErrors = Object.keys(errors).length !== 0;
        !isErrors && setIsSubmitting(true);




        AxiosInstance.post("/auth", {
            email: values.email,
            password: values.password
        }).then((response) => {
            console.log('response', response)
            const { token } = response.data
            localStorage.setItem("token", token)
        })


    }

    return { handleChange, values, handleSubmit, errors, isSubmitting }

}

export default useFormSignIn;