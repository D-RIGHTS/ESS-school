import React , { useEffect } from "react";
import "./styles.css";
import useForm from "./useForm";
import validate from "./validateInfo";
import FormSuccess from "../../BodyNonAuthenticated/FormSuccess";
import { useHistory } from "react-router-dom";
import { Input } from "../input";
import axios from "axios";

function SignUpForm({  isSubmitted }) {

    const history = useHistory();
    const { handleChange, values, handleSubmit, errors, valueSubmitForm} = useForm(validate);

    useEffect(() => {
        const doRedirect = Object.keys(errors).length === 0 &&
            values.email &&
            values.name &&
            values.password &&
            values.surname &&
            values.verifyPassword;
        doRedirect && history.push('/Home');
    }, [errors, history]);

    // console.log('errors', errors);
    // console.log('values', values);

    // const valueSubmitForm = (e) => {
    //     e.preventDefault()
    //     axios.post("http://localhost:3001/api-docs/#/Auth/get_auth_user", {
    //         name: values.name,
    //         surname:values.surname,
    //         email: values.email,
    //         password: values.password,
    //         verifyPassword: values.verifyPassword
    //     })
    //         .then((res) => {
    //             if (res.data.accessToken) {
    //                 localStorage.setItem("user", JSON.stringify(res.data))
    //             }
    //             return res.data
    //         })
    // }


    return (
        <div className="signUpDiv">
            {!isSubmitted && <div className="sign-up-container">
                <h2>Sign Up</h2>
                Create your account!
                <br />
                <form  className="sign-up-form" onSubmit={handleSubmit}>
                    <Input
                        label={'Name:'}
                        fieldName={'name'}
                        placeholder={"Given Names"}
                        values={values}
                        onChange={handleChange}
                        errors={errors}
                    />
                    <Input
                        label={'Surname:'}
                        fieldName={'surname'}
                        placeholder={"Surname"}
                        values={values}
                        onChange={handleChange}
                        errors={errors}
                    />
                    <Input
                        label={'Email:'}
                        fieldName={'email'}
                        placeholder={"Email"}
                        values={values}
                        onChange={handleChange}
                        errors={errors}
                    />
                    <Input
                        label={'Password:'}
                        fieldName={'password'}
                        fieldType={"password"}
                        placeholder={"Password"}
                        values={values}
                        onChange={handleChange}
                        errors={errors}
                    />
                    <Input
                        label={'Verify Password:'}
                        fieldName={'verifyPassword'}
                        fieldType={"password"}
                        placeholder={"Confirm Password"}
                        values={values}
                        onChange={handleChange}
                        errors={errors}
                    />



                    <label>
                        <input className="termsAndCond" type="checkbox" /> <h6>I accept the <a className="terms" href="/">Terms of Use</a> & <a className="terms" href="/">privacy Policy</a></h6>
                    </label>
                   <div className="submitting">
                       <label htmlFor="">
                           <button onClick={valueSubmitForm} type="submit" className="Loginbtn">Sign Up</button>
                       </label>
                       <span className="signUpTxt" >
                             Already signed up? Login <a href="#">here</a>
                    </span>
                   </div>
                </form>

            </div>}

            {isSubmitted && <FormSuccess />}
        </div>
    )
}

export default SignUpForm;