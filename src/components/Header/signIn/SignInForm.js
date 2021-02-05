import React from "react";
import "../styles.css";


function SignInForm (){

    return(
        <div className="signInDiv">
            <div className="sign-in-container">
                <h2>Sign In</h2>
                Enter your Login Details Below
                <br />
                <form className="sign-in-form">
                    <label htmlFor="email">Email Address:</label>
                    <input
                        id="name"
                        type=""
                        name="email"
                        placeholder="Enter email"
                        required=""

                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        id="name"
                        name="password"
                        placeholder="Password"
                        required=""


                    />
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