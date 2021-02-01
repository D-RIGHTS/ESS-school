import React, {useState} from "react";

const useSignInUseForm = () => {
    const [values, setValues] = useState({
        email:"",
        password:""
    })

    const [errors, setErrors] = useState({})

    const handleChanges = e => {
        const {name, value} = e.target

        setValues({
            ...values,
            [name]:value
        })
    }
return {handleChanges, values, errors}
}

export default useSignInUseForm;