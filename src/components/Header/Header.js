import React from "react";
import "./styles.css";

function Header () {
    return(
        <div className="Header">
            <section className="container">
                <div className="logo">
                    <h3>Essential English School</h3>
                </div>
                <div className="menuList">
                    <ul className="ulMenu">
                        <li className="liMenu">
                            <h4 className="h4List"><a href="">Home</a></h4>
                            <h4 className="h4List"><a href="">About us</a></h4>
                            <h4 className="h4List"><a href="">Courses</a></h4>
                            <h4 className="h4List"><a href="">Live Forum</a></h4>
                            <h4 className="h4List"><a href="">Feedback</a></h4>
                            <h4 className="h4List"><a href="">Notifications</a></h4>

                        </li>
                    </ul>
                </div>
                <sign className="login-details">
                    <h4 className="sign-up"><a href="">Sign up</a></h4>
                    <h4 className="sign-in"><a href="">Sign in</a></h4>
                </sign>
            </section>
        </div>
    )
}

export default Header;