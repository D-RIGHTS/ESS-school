import React from "react";
import "./styles.css"
function HeroSection () {
    return(
        <div className="HeroSection-styles">
            <section className="HeroSection-container">
                <div className="WelcomeNote">
                    <h3>Welcome to the Essential English School, were dreams are turned into reality. EES prides its self with the work it has put in for the past years. Dont feel left us! Get to know more about EES.</h3>
                </div>
                <div className="btn">Learn More</div>
            </section>
            <section className="requestFormSection">
                <div className="requestFormContainer">
                    <form className="requestForm">
                        <h2>Request a trial run</h2>
                        <label htmlFor="name"></label>
                        <input className="inputForm" type="name" placeholder="Name:"/>
                        <label htmlFor="surname"></label>
                        <input className="inputForm" type="surname" placeholder="Surname:"/>
                        <label htmlFor="email"></label>
                        <input className="inputForm" type="email" placeholder="Email:"/>
                        <label htmlFor="number"></label>
                        <input className="inputForm" type="tel" placeholder="+380:"/>
                        <input className="btnInput" type="submit" value="Submit my request" />
                    </form>
                </div>
            </section>
        </div>
    )
}

export default HeroSection;