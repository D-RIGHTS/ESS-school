import React from "react";
import "./styles.css";

function SignUpForm () {
    return(
        <div className="signUpDiv">
            <div className="sign-up-container">
                <h2>Sign Up</h2>
                Create your account!
                <br />
                <form action="" className="sign-up-form">
                    <label htmlFor="name" >Name:</label>
                        <input type="name" placeholder="Given Names" required=""/>

                    <label htmlFor="surname">Surname:</label>
                        <input type="surname" placeholder="Surname" required=""/>

                    <label htmlFor="email">Email:</label>
                        <input type="email" placeholder="Email" required=""/>

                    <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" required=""/>

                    <label htmlFor="password">Verify Password:</label>
                        <input type="password" placeholder="Confirm Password" required=""/>

                    <label>
                        <input className="termsAndCond" type="checkbox" /> <h6>I accept the <a className="terms" href="/">Terms of Use</a> & <a className="terms" href="/">privacy Policy</a></h6>
                    </label>
                    <label htmlFor="">
                        <input className="Loginbtn" type="submit" placeholder="Submit"/>
                    </label>
                </form>

            </div>
        </div>
    )
}

export default SignUpForm;