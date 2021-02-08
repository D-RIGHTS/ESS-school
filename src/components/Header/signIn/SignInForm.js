import React from "react";
import "../styles.css";
import useFormSignIn from "./useFormSignIn";


function SignInForm (){
    const { handleChange, handleSubmit, values, errors } = useFormSignIn({ email:"", password:"", })

    return(
        <div className="signInDiv">
            <div className="sign-in-container">
                <h2>Sign In</h2>
                Enter your Login Details Below
                <br />
                <form onSubmit={handleSubmit} className="sign-in-form">
                    <label htmlFor="email">Email Address:</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required=""
                        onChange={handleChange}
                        value={values.email}

                    />
                    {errors.email && <p>{errors.email}</p>}
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required=""
                        onChange={handleChange}
                        value={values.password}

                    />
                    {errors.password && <p>{errors.password}</p>}
                    <label>
                        <input type="checkbox"  name="remember"/>   Remember me
                    </label>
                    <input className="Loginbtn" type="submit" placeholder="Submit"/>
                    <h6 className="pass">Forgot <a className="password" href="/">Password</a></h6>
                </form>

            </div>
        </div>
    )
}

export default SignInForm;