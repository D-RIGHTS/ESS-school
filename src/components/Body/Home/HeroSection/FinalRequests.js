import React, { useEffect, useContext } from "react"
import CreateRequest from "./CreateRequest";
import "./styles.css";
import {HeroSectionContext} from "./HeroSectionContext";

function FinalRequests () {

    const [ name, setName, surname, setSurname, email, setEmail, tel, setTel, allRequests, setAllRequests, getName, getSurname, getEmail, getTel ] = useContext(HeroSectionContext)


    // useEffect Initializers

    useEffect(()=> {
        console.log('allRequests', allRequests)
    }, [allRequests]);



    //onChangeHandlers
    const saveName = (event) => {
        setName(event.target.value);
        // console.log('name',name)
    }

    const saveSurname = (event) => {
        setSurname(event.target.value);
        // console.log('surname',surname)
    }

    const saveEmail = (event) => {
        setEmail(event.target.value);
        // console.log('email', email)
    }

    const saveTel = (event) => {
        setTel(event.target.value);
        // console.log('tel', tel)
    }



    //onSubmit Handler
    const saveRequest = (event) => {
        event.preventDefault()
        setAllRequests([...allRequests, {name, surname, email, tel}]);

        getName.current.value="";
        getSurname.current.value="";
        getEmail.current.value="";
        getTel.current.value="";
        // console.log('allRequests', allRequests)
        alert('Request successfully sent')
    };



    return (
        <div>
            <CreateRequest
               saveName={saveName}
               saveSurname={saveSurname}
               saveEmail={saveEmail}
               saveTel={saveTel}
               saveRequest={saveRequest}
               getName={getName}
               getSurname={getSurname}
               getEmail={getEmail}
               getTel={getTel}

            />
        </div>
    )
}

export default FinalRequests;