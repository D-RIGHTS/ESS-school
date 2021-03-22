import React, {createContext, useRef, useState} from "react";

export const HeroSectionContext = createContext();

export const HeroSectionProvider = ({children}) => {

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

    let myHeroSectionValues = [ name, setName, surname, setSurname, email, setEmail, tel, setTel, allRequests, setAllRequests, getName, getSurname, getEmail, getTel ]

    return(
        <HeroSectionContext.Provider value={myHeroSectionValues} >
            {children}
        </HeroSectionContext.Provider>
    )
}