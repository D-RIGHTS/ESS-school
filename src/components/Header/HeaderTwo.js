import React, {useState} from "react";
import "./styles.css";
import {Link} from "react-router-dom";


const HeaderTwo = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSideBar = () => setSidebar(!sidebar)

    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <i className="fas fa-bars" onClick={showSideBar}></i>
                </Link>
                <div className="logo">
                    <h1><Link to="/Home">EES</Link></h1>
                </div>

            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSideBar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars" >
                            <i className="fas fa-times"></i>

                        </Link>
                    </li>
                    <ul className="" >
                        <li className="nav-text"><Link to="/Home"><i className="fas fa-home"></i> Home</Link></li>
                        <li className="nav-text"><Link to="/AboutUs"><i className="fas fa-info-circle"></i>About Us</Link></li>
                        <li className="nav-text"><Link to="/Courses"><i className="fas fa-book-reader"></i>Courses</Link></li>
                        <li className="nav-text"><Link to="/LiveForum"><i className="fas fa-user-tie"></i>Live Forum</Link></li>
                        <li className="nav-text"><Link to="/Feedback"><i className="fas fa-comments-dollar"></i>Feedback</Link></li>
                        <li className="nav-text"><Link to="/Notifications"><i className="fas fa-comment-dots"></i>Notifications</Link></li>
                    </ul>
                </ul>

            </nav>

        </>
    )
}

export default HeaderTwo;

