import React, {useState} from "react";
import "./styles.css"
import { Link } from "react-router-dom";
import FinalRequests from "./FinalRequests";
import axios from "axios";


const HeroSection = () => {

    return (

        <div className="HeroSection-styles">
            <section className="HeroSection-container">
                <div className="WelcomeNote">
                    <h3>Welcome to the Essential English School, were dreams are turned into reality. EES prides its self with the work it has put in for the past years. Dont feel left us! Get to know more about EES.</h3>
                </div>
                <div className="btn"><Link to="/OfflineNote">Learn More</Link></div>
            </section>
           <FinalRequests />
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
//             Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmYjI0NWNjMTRlYjRiMjI3NTI5NTEwZCIsImVtYWlsIjoiZHVtaXNhbmlAZHVtaS5jb20iLCJuYW1lIjoiRHVtZXp3ZW5pIiwiZGF0ZUNyZWF0ZWQiOiIyMDIwLTExLTE2VDA5OjI2OjM2LjI4OVoiLCJfX3YiOjB9LCJpYXQiOjE2MTE2NzE1NDgsImV4cCI6MTYxMTY3NTE0OH0.FneEwQCiNyBzdmedU0sNPpxd-gAnePDmdsaAqvuxoNI"
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