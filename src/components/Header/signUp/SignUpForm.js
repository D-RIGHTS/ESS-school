import React , { useEffect } from "react";
import "../styles.css";


function SignUpForm() {


    return (
        <div className="signUpDiv">
            <div className="sign-up-container">
                <h2>Sign Up</h2>
                Create your account!
                <br />
                <form  className="sign-up-form" >
                    <label htmlFor="name">Name</label>
                    <input type="text"
                           id="name"
                           name="name"
                           placeholder="Name:"
                    />
                    <label htmlFor="surname">Surname</label>
                    <input type="text"
                           id="surname"
                           name="surname"
                           placeholder="surname"
                    />


                    <label>
                        <input className="termsAndCond" type="checkbox" /> <h6>I accept the <a className="terms" href="/">Terms of Use</a> & <a className="terms" href="/">privacy Policy</a></h6>
                    </label>
                    <div className="submitting">
                        <label htmlFor="">
                            <button type="submit" className="Loginbtn">Sign Up</button>
                        </label>
                        <span className="signUpTxt" >
                             Already signed up? Login <a href="#">here</a>
                    </span>
                    </div>
                </form>

            </div>


        </div>
    )
}

export default SignUpForm;
