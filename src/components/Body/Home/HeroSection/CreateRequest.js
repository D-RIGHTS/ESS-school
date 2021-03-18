import React from "react";
import "./styles.css";

function CreateRequest ({saveName, saveSurname, saveEmail, saveTel, saveRequest, getName, getSurname, getEmail, getTel }) {
    return(

            <section className="requestFormSection">
                <div className="requestFormContainer">
                    <form className="requestForm">
                        <h2>Request a trial run</h2>

                        <label htmlFor="name" />
                        <input
                            className="inputForm"
                            type="text"
                            placeholder="Name:"
                            onChange={saveName}
                            ref={getName}
                            required
                        />

                        <label htmlFor="surname" />
                        <input
                            className="inputForm"
                            type="text"
                            placeholder="Surname:"
                            onChange={saveSurname}
                            ref={getSurname}
                            required

                        />

                        <label htmlFor="email" />
                        <input
                            className="inputForm"
                            type="email"
                            placeholder="Email:"
                            onChange={saveEmail}
                            ref={getEmail}
                            required
                        />

                        <label htmlFor="number" />
                        <input
                            className="inputForm"
                            type="tel"
                            placeholder="+380:"
                            onChange={saveTel}
                            ref={getTel}
                            required
                        />

                        <button onClick={saveRequest}><i className="fas fa-share"/></button>
                    </form>
                </div>
            </section>
    )
}

export default CreateRequest;