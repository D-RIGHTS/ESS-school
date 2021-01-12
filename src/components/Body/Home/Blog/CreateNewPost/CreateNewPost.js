import React from "react";
import "./styles.css";

function CreateNewPost ({
    onChange,
    savePost,
    content,
    title
}) {
    return (
        <div className="CreateNewPost">
            <form className="CreateForm" onSubmit={savePost}>
                <h1>Create New Post</h1>
                <br />
                <input
                    type="text"
                    onChange={onChange}
                    value={title}
                    placeholder="title"
                    name={"setTitle"}
                    size="39"
                    required
                />
                <br />
                <textarea
                  placeholder="content"
                  onChange={onChange}
                  cols="41"
                  rows="10"
                  name={"setContent"}
                  required
                  value={content}
                >
                </textarea>
                <br />
                <button className="btn">Save Post</button>
            </form>
        </div>
    )
}

export default CreateNewPost;