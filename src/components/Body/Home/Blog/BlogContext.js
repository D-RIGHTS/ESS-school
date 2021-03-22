import React, {createContext, useRef, useState} from "react";


export const BlogContext = createContext();


export const BlogProvider = ({children}) => {
    // useState Initializers
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [fullText, setFullText] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);
    const [isModifyPost, setIsModifyPost] = useState(false);
    const [editPostId, setEditPostId] = useState("");

    // useRef Initializers
    const getTitle = useRef();
    const getDescription = useRef();
    const getFullText = useRef();

    // Blog value initializers
    let myBlogValues = [ title, setTitle,description,setDescription,fullText,setFullText, allPosts, setAllPosts, isCreateNewPost, setIsCreateNewPost, isModifyPost, setIsModifyPost, editPostId, setEditPostId, getTitle, getDescription, getFullText ]


    return(
        <BlogContext.Provider value={myBlogValues} >
            {children}
        </BlogContext.Provider>

    )
}