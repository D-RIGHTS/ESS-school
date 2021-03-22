import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import FinalRequests from "./FinalRequests";
// import axios from "axios";
import {HeroSectionProvider} from "./HeroSectionContext";


const HeroSection = () => {

    return (

        <div className="HeroSection-styles">
            <section className="HeroSection-container">
                <div className="WelcomeNote">
                    <h3>Welcome to the Essential English School, were dreams are turned into reality. EES prides its self with the work it has put in for the past years. Dont feel left us! Get to know more about EES.</h3>
                </div>
                <div className="btn"><Link to="/OfflineNote">Learn More</Link></div>
            </section>
           <HeroSectionProvider>
               <FinalRequests />
           </HeroSectionProvider>
        </div>
    )
}

export default HeroSection;

// const submitForm = (e) => {
//     e.preventDefault()
//     axios.post("http://localhost:3001/api/v1/posts", {
//         name: formData.name,
//         surname: formData.surname,
//         email: formData.email
//     }, {
//         headers:{
//             Authorization : "Bearer "
//         }
//     })
//         .then((res) =>{
//             if (res.data.accessToken) {
//                 localStorage.setItem("user", JSON.stringify(res.data))
//             }
//             return res.data
//         })
// }
//
// // console.log(formData, 'formData')