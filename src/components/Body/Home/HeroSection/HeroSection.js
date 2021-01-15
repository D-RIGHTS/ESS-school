import React, {useState} from "react";
import "./styles.css"
import { Link } from "react-router-dom";
import axios from "axios";

// const API_URL = "http://localhost:3001/api-docs/#/Posts/";

const HeroSection = () => {
    const [formData, setFormDate] =  useState({
        name: "",
        surname: "",
        email: "",
        tel: ""
    });

    const handleChange = (name, event) => {
        const inputValue = event.target.value;
        setFormDate({...formData, [name]: inputValue});
    }

    // const submitForm = (e) => {
    //     e.preventDefault()
    //     axios.post("http://localhost:3001/api/v1/posts", {
    //             title: formData.name,
    //         fullText: formData.surname,
    //         description:formData.email
    //         }, {headers:{Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwMDA1OWU1NWRjOWQ1MThmNWM3YWEzMiIsImVtYWlsIjoidGVzdEB0ZXN0LnVhIiwibmFtZSI6IlhYWFhYIiwiZGF0ZUNyZWF0ZWQiOiIyMDIxLTAxLTE0VDE0OjQ5OjA5Ljc5NloiLCJfX3YiOjB9LCJpYXQiOjE2MTA2MzU3NzksImV4cCI6MTYxMDYzOTM3OX0.0wId2LM4A6wSvUqK3UhBFSDNpXSPE8pQ2M2gtqyhbYc"}})
    //         .then((res) => {
    //             if ( res.data.accessToken) {
    //                 localStorage.setItem("name", JSON.stringify(res.data))
    //                 console.log(res)
    //             }
    //             return res.data
    //         })
    // }

    const submitForm = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/api/v1/posts", {
            name: formData.name,
            surname: formData.surname,
            email: formData.email
        })
            .then((res) =>{
                if (res.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(res.data))
                }
                return res.data
            })
    }

    // console.log(formData, 'formData')
    return (

        <div className="HeroSection-styles">
            <section className="HeroSection-container">
                <div className="WelcomeNote">
                    <h3>Welcome to the Essential English School, were dreams are turned into reality. EES prides its self with the work it has put in for the past years. Dont feel left us! Get to know more about EES.</h3>
                </div>
                <div className="btn"><Link to="/OfflineNote">Learn More</Link></div>
            </section>
            <section className="requestFormSection">
                <div className="requestFormContainer">
                    <form className="requestForm">
                        <h2>Request a trial run</h2>
                        <label htmlFor="name"></label>
                        <input className="inputForm" value={formData.name} onChange={(event) => handleChange("name", event)} type="name" placeholder="Name:"/>
                        <label htmlFor="surname"></label>
                        <input className="inputForm"value={formData.surname} onChange={(event) => handleChange("surname", event)} type="surname" placeholder="Surname:"/>
                        <label htmlFor="email"></label>
                        <input className="inputForm" value={formData.email} onChange={(event) => handleChange("email", event)} type="email" placeholder="Email:"/>
                        <label htmlFor="number"></label>
                        <input className="inputForm" value={formData.tel} onChange={(event) => handleChange("tel", event)} type="tel" placeholder="+380:"/>
                        <input onClick={submitForm} className="btnInput" type="submit" value="Submit my request" />
                    </form>
                </div>

            </section>
        </div>
    )
}

export default HeroSection;