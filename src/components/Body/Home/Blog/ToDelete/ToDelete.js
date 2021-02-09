CreateNew Post

import React from "react";
import "./styles.css";
import axios from "axios";

function CreateNewPost ({
                            onChange,
                            savePost,
                            description,
                            fullText,
                            title
                        }) {

    const submitPost = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/api/v1/posts", {
            title: title,
            description: description,
            fullText: fullText
        }, {
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmYjI0NWNjMTRlYjRiMjI3NTI5NTEwZCIsImVtYWlsIjoiZHVtaXNhbmlAZHVtaS5jb20iLCJuYW1lIjoiRHVtZXp3ZW5pIiwiZGF0ZUNyZWF0ZWQiOiIyMDIwLTExLTE2VDA5OjI2OjM2LjI4OVoiLCJfX3YiOjB9LCJpYXQiOjE2MTE2NzE1NDgsImV4cCI6MTYxMTY3NTE0OH0.FneEwQCiNyBzdmedU0sNPpxd-gAnePDmdsaAqvuxoNI"
            }
        })
            .then((res) => {
                if(res.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(res.data))
                }
                return res.data
            })
    }

    return (
        <div className="CreateNewPost">
            <form className="CreateForm" onSubmit={savePost}>
                <h1>Create New Post</h1>
                <br />
                <input
                    type="text"
                    onChange={onChange}
                    value={title}
                    placeholder="title:"
                    name={"setTitle"}
                    size="39"
                    required
                />
                <br />
                <input
                    type="text"
                    onChange={onChange}
                    value={description}
                    placeholder="post description:"
                    name={"setDescription"}
                    size="39"
                    required
                />
                <br />


                <textarea
                    placeholder="full Text"
                    onChange={onChange}
                    cols="41"
                    rows="10"
                    name={"setFullText"}
                    required
                    value={fullText}
                >
                </textarea>

                <br />
                <button onClick={submitPost} className="btn">Save Post</button>
            </form>
        </div>
    )
}

export default CreateNewPost;



DisplayAllPosts

import React, { useState } from "react";
import "./styles.css";
import CreateNewPost from "../CreateNewPost/CreateNewPost";
import Post from "../Post/Post";
// import axios from "axios";


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

    const submitPost = (e) => {
        e.preventDefault()
        // axios.post("http://localhost:3001/api/v1/posts", {
        //     title: title,
        //     description: description,
        //     fullText: fullText
        // }, {
        //     headers:{
        //         Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmYjI0NWNjMTRlYjRiMjI3NTI5NTEwZCIsImVtYWlsIjoiZHVtaXNhbmlAZHVtaS5jb20iLCJuYW1lIjoiRHVtZXp3ZW5pIiwiZGF0ZUNyZWF0ZWQiOiIyMDIwLTExLTE2VDA5OjI2OjM2LjI4OVoiLCJfX3YiOjB9LCJpYXQiOjE2MTE2NzE1NDgsImV4cCI6MTYxMTY3NTE0OH0.FneEwQCiNyBzdmedU0sNPpxd-gAnePDmdsaAqvuxoNI"
        //     }
        // })
        //     .then((res) => {
        //         if(res.data.accessToken) {
        //             localStorage.setItem("user", JSON.stringify(res.data))
        //         }
        //         return res.data
        //     })
    }

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

ModifyAllPosts

import React from "react";
import "./styles.css";

function ModifyPost () {
    return (
        <>
            <form className="ModifyPost">
                <h1 className="h1Modify">Modify Post</h1>
                <input className="modifyInput" type="text" placeholder="title" size="39" required />
                <textarea className="modifyTextArea" placeholder="content" cols="40" rows="10"></textarea>
                <button className="btn">Update Post</button>
            </form>
        </>
    )
}

export default ModifyPost;


Post

import React from "react";
import "./styles.css";

function Post ({title,fullText, description}) {
    return (
        <>
            <section className="postSec">
                <h3 className="postTitle">{title}</h3>
                <h3 className="postTitle">{description}</h3>
                <p className="postParagraph">{fullText}</p>
                <button className="postEdit">Edit</button>
                <button className="postDelete" >Delete</button>
            </section>
        </>
    )
}

export default Post;