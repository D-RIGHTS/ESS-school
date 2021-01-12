import React from "react";
import "./styles.css";
import {Link} from "react-router-dom";

function Header () {
    return(
        <div className="Header">
            <section className="container">
                <div className="logo">
                    <h3><Link to="/Home">Essential English School</Link></h3>
                </div>
                <div className="menuList">
                    <ul className="ulMenu">
                         <li className="h4List"><Link to="/Home">Home</Link></li>
                         <li className="h4List"><Link to="/AboutUs">About Us</Link></li>
                         <li className="h4List"><Link to="/Courses">Courses</Link></li>
                         <li className="h4List"><Link to="/LiveForum">Live Forum</Link></li>
                         <li className="h4List"><Link to="/Feedback">Feedback</Link></li>
                         <li className="h4List"><Link to="/Notifications">Notifications</Link></li>
                    </ul>
                </div>
                <div className="login-details">
                    <h4 className="sign-up"><Link to="/SignUpForm">Sign Up</Link></h4>
                    <h4 className="sign-in"><Link to="/SignInForm">Sign In</Link></h4>
                </div>
            </section>
        </div>
    )
}

export default Header;