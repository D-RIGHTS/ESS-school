import React, {createContext, useState} from "react";

export const ObjectiveContext = createContext();

export const ObjectiveProvider = ({children}) => {

    //useState Initializers
    const [comment, setComment] = useState("");
    const [allPost, setAllPost] = useState([]);
    const [isCreatePost, setIsCreatePost] = useState(false);

    // Objective Value Initializers
    let myObjectiveValues = [comment, setComment, allPost, setAllPost, isCreatePost, setIsCreatePost]

    return(
        <ObjectiveContext.Provider value={myObjectiveValues} >
            {children}
        </ObjectiveContext.Provider>
    )
}