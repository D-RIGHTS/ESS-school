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