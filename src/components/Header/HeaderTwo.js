import React, {useState} from "react";
import "./styles.css";
import "./HeaderMediaQueries.css";
import {Link} from "react-router-dom";


const HeaderTwo = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSideBar = () => setSidebar(!sidebar)

    return (
        <div className="HeaderTwo">
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <i className="fas fa-bars" onClick={showSideBar}/>
                </Link>
                <div className="logo">
                    <h1 className="EESLogo"><Link to="/Home">EES</Link></h1>
                    <h1 className="LogoName"><Link to="/Home">Essential English School</Link></h1>
                </div>

            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSideBar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars" >
                            <i className="fas fa-times"/>

                        </Link>
                    </li>
                    <ul className="" >
                        <li className="nav-text"><Link to="/Home"><i className="fas fa-home"/> Home</Link></li>
                        <li className="nav-text"><Link to="/AboutUs"><i className="fas fa-info-circle"/>About Us</Link></li>
                        <li className="nav-text"><Link to="/Courses"><i className="fas fa-book-reader"/>Courses</Link></li>
                        <li className="nav-text"><Link to="/LiveForum"><i className="fas fa-user-tie"/>Live Forum</Link></li>
                        <li className="nav-text"><Link to="/Feedback"><i className="fas fa-comments-dollar"/>Feedback</Link></li>
                        <li className="nav-text"><Link to="/Notifications"><i className="fas fa-comment-dots"/>Notifications</Link></li>
                    </ul>
                    <div className="login-details">
                        <h4 className="sign-up"><Link to="/SignUpForm">Sign Up</Link></h4>
                        <h4 className="sign-in"><Link to="/SignInForm">Sign In</Link></h4>
                    </div>

                </ul>
            </nav>

        </div>
    )
}

export default HeaderTwo;

