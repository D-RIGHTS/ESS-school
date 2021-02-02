import React from "react";
import "../../styles.css";
import axios from "axios";

function SignUpForm () {
    const [authUsers, setAuthUsers] = React.useState({
        name: "",
        email: "",
        password: "",
    })

    const authUserEvents = (name, surname, email, password, verifyPassword, event) => {
        const authUserInputValues = event.target.value;
        setAuthUsers(...authUsers, [name], [email], [password], authUserInputValues)
    };

    const authUserSubmitForm = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/api-docs/#/Users/post_users", {
            name: authUsers.name,
            email: authUsers.email,
            password: authUsers.password
        })
            .then((res) => {
                if (res.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(res.data))
                }
                return res.data
            })
    }


    return(
        <div className="signUpDiv">
            <div className="sign-up-container">
                <h2>Sign Up</h2>
                Create your account!
                <br />
                <form action="" className="sign-up-form">
                    <label htmlFor="name" >Name:</label>
                    <input type="name" value={authUsers.name} onChange={(event) => authUserEvents("name", event)} placeholder="Given Names" required=""/>
                    <label htmlFor="surname">Surname:</label>
                    <input type="surname" value={authUsers.surname} onChange={(event) => authUserEvents("surname", event)} placeholder="Surname" required=""/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" value={authUsers.email} onChange={(event) => authUserEvents("email", event)} placeholder="Email" required=""/>

                    <label htmlFor="password">Password</label>
                    <input type="password" value={authUsers.password} onChange={(event) => authUserEvents("password", event) } placeholder="Password" required=""/>

                    <label htmlFor="password">Verify Password:</label>
                    <input type="password" value={authUsers.password} onChange={(event) => authUserEvents("password", event)} placeholder="Confirm Password" required=""/>
                    <label>
                        <input className="termsAndCond" type="checkbox" /> <h6>I accept the <a className="terms" href="/">Terms of Use</a> & <a className="terms" href="/">privacy Policy</a></h6>
                    </label>
                    <label htmlFor="">
                        <input onClick={authUserSubmitForm} className="Loginbtn" type="submit" placeholder="Submit"/>
                    </label>
                </form>

            </div>
        </div>
    )
}

export default SignUpForm;