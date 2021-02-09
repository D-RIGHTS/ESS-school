import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import Courses from "./Courses/Courses";
import LiveForum from "./LiveForum/LiveForum";
import Feedback from "./Feedback/Feedback";
import Notifications from "./Notifications/Notifications";
import SignUpForm from "../Header/signUp/SignUpForm";
import SignInForm from "../Header/signIn/SignInForm";
import OfflineNote from "./OfflineNote";
import "./styles.css"

function Body() {
    return(
        <div className="Body-styles">
            <Route path="/Home" render={() => <Home /> } />
            <Route path="/AboutUs" render={() => <AboutUs /> } />
            <Route path="/Courses" render={() => <Courses /> } />
            <Route path="/LiveForum" render={() => <LiveForum /> } />
            <Route path="/Feedback" render={() => <Feedback /> } />
            <Route path="/Notifications" render={() => <Notifications /> } />
            <Route path="/SignUpForm" render={() => <SignUpForm /> } />
            <Route path="/SignInForm" render={() => <SignInForm /> } />
            <Route path="/OfflineNote" render={() => <OfflineNote /> } />
        </div>
    )
}

export default Body;