import React from "react";
import useForm from "./useForm";
import FormSuccess from "./FormSuccess";
import "../styles.css";

function SignUpForm() {
    const { isSubmitting, errors, values, handleChange, handleSubmit } = useForm({
        name: "",
        email: "",
        password: "",
        verifyPassword: ""
    });


    return (
        <div className="signUpDiv">
            {!isSubmitting && <div className="sign-up-container">
                <h2>Sign Up</h2>
                Create your account!
                <br />
                <form onSubmit={handleSubmit}  className="sign-up-form" >
                    <label htmlFor="name">Full Name:</label>
                    <input type="text"
                           id="name"
                           name="name"
                           placeholder="Full Name:"
                           onChange={handleChange}
                           value={values.name}
                    />
                    {errors.name && <p>{errors.name}</p>}

                    <label htmlFor="email">Email:</label>
                    <input type="text"
                           id="email"
                           name="email"
                           placeholder="Enter Email:"
                           onChange={handleChange}
                           value={values.email}
                    />
                    {errors.email && <p>{errors.email}</p>}


                    <label htmlFor="password">Password:</label>
                    <input type="password"
                           id="password"
                           name="password"
                           placeholder="Enter Password here:"
                           onChange={handleChange}
                           value={values.password}
                    />
                    {errors.password && <p>{errors.password}</p>}


                    <label htmlFor="verifyPassword">VerifyPassword:</label>
                    <input type="password"
                           id="verifyPassword"
                           name="verifyPassword"
                           placeholder="Verify Password here:"
                           onChange={handleChange}
                           value={values.verifyPassword}
                    />
                    {errors.verifyPassword && <p>{errors.verifyPassword}</p>}


                    <label>
                        <input className="termsAndCond" type="checkbox" /> <h6>I accept the <a className="terms" href="/">Terms of Use</a> & <a className="terms" href="/">privacy Policy</a></h6>
                    </label>
                    <div className="submitting">
                        <label htmlFor="">
                            <button type="submit" className="Loginbtn">Sign Up</button>
                        </label>
                        <span className="signUpTxt" >
                             Already signed up? Login <a href="SignInForm">here</a>
                    </span>
                    </div>
                </form>

            </div>}

            {isSubmitting && <FormSuccess />}
        </div>
    )
}

export default SignUpForm;
