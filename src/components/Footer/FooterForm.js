import React, {useState, useEffect, useRef} from "react";

const FooterForm = () => {

    const [email, setEmail] = useState("");
    const [allEmails, setAllEmails] = useState([]);

    const getEmail = useRef();

    useEffect(()=>{
        console.log('allEmails', allEmails)
    },[allEmails])

    //onChange Handler
    const saveEmail = (event) => {
        setEmail(event.target.value)
        // console.log('email', email)
    }

    // onSubmit
    const saveData = (e) => {
        e.preventDefault();
        const id = Date.now();
        setAllEmails([...allEmails, {email, id}]);
        getEmail.current.value="";
        alert('Thanks for subscribing!')
        // console.log('allEmails', allEmails)
    }

    return(
        <>
            <form onSubmit={saveData}>
                <input type="text" onChange={saveEmail} ref={getEmail} placeholder="Enter your email:"/>
                <button>Subscribe</button>
            </form>
        </>
    )
}

export default FooterForm;