import React, {useState, useRef, useEffect} from "react"
import CreateRequest from "./CreateRequest";
import "./styles.css";

function FinalRequests () {

    //useState Initializers
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

    const [allRequests, setAllRequests] = useState([]);



    // useRef Initializers
    const getName = useRef();
    const getSurname = useRef();
    const getEmail = useRef();
    const getTel = useRef();

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