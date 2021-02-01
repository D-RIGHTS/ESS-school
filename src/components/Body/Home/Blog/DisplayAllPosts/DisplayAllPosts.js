import React, { useState } from "react";
import "./styles.css";
import CreateNewPost from "../CreateNewPost/CreateNewPost";
import Post from "../Post/Post";
import axios from "axios";


function DisplayAllPosts () {
    //useState inits
    const [title, setTitle] = useState("");
    const [description, setDescription] =useState("")
    const [fullText, setFullText] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);

    const onChange= ({ target }) => {
        const { name, value } = target;
        if(name === 'setFullText') {
            setFullText(value);
        } else if(name === 'setTitle') {
            setTitle(value);
        }
        if(name === 'setDescription') {
            setDescription(value)
        }
    };

    //toggle
    const toggleCreateNewPost = () => {
        setIsCreateNewPost(!isCreateNewPost)
    }

    const savePost = event => {
        event.preventDefault();
        setAllPosts([...allPosts, {title, fullText, description}]);
        console.log({title, fullText, description});
        setTitle("");
        setFullText("");
        setDescription("");
    };

    // const submitPost = (e) => {
    //     e.preventDefault()
    //     axios.post("http://localhost:3001/api/v1/posts", {
    //         title: title,
    //         description: description,
    //         fullText: fullText
    //     }, {
    //         headers:{
    //             Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmYjI0NWNjMTRlYjRiMjI3NTI5NTEwZCIsImVtYWlsIjoiZHVtaXNhbmlAZHVtaS5jb20iLCJuYW1lIjoiRHVtZXp3ZW5pIiwiZGF0ZUNyZWF0ZWQiOiIyMDIwLTExLTE2VDA5OjI2OjM2LjI4OVoiLCJfX3YiOjB9LCJpYXQiOjE2MTE2NzE1NDgsImV4cCI6MTYxMTY3NTE0OH0.FneEwQCiNyBzdmedU0sNPpxd-gAnePDmdsaAqvuxoNI"
    //         }
    //     })
    //         .then((res) => {
    //             if(res.data.accessToken) {
    //                 localStorage.setItem("user", JSON.stringify(res.data))
    //             }
    //             return res.data
    //         })
    // }

    return (
        <>
            <button onClick={toggleCreateNewPost}>Create New</button>
            {isCreateNewPost && <CreateNewPost
                onChange={onChange}
                savePost={savePost}
                title={title}
                fullText={fullText}
                description={description}
            />}
            <>
                <h2>All Posts</h2>
                {!allPosts.length ? (
                    <div>
                        <h3>
                            There is nothing to see here!
                        </h3>
                    </div>
                ) : (
                    allPosts.map(eachPost => {
                        return (
                            <Post
                                id={eachPost.id}
                                key={eachPost.id}
                                title={eachPost.title}
                                fullText={eachPost.fullText}
                                description={eachPost.description}
                            />
                        );
                    })
                )}
                <br/>
            </>
        </>
    )

}

export default DisplayAllPosts;