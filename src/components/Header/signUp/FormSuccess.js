import React from "react";
import "../styles.css";

function FormSuccess () {
    return(
        <article className="FormSuccess">
            <h1> Congrats! You are now a recognized EES user!</h1>
            <p>Already Signup? Let's <a href="SignInForm">Login</a>!</p>
        </article>
    )
}

export default FormSuccess;

