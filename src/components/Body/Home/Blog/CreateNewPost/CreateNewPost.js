import React from "react";
import "./styles.css";

const CreateNewPost = ({ savePost, saveTitle, saveDescription, saveFullText, getTitle, getDescription, getFullText }) => {
    return (
        <>
            <form className="CreateForm" onSubmit={savePost} >
                <h1>Create your Post!</h1>
                <br />
                <input
                    type="text"
                    onChange={saveTitle}
                    ref={getTitle}
                    placeholder="title"
                    size="39"
                    required
                />

                <br />
                <br />

                <input
                    type="text"
                    onChange={saveDescription}
                    ref={getDescription}
                    placeholder="description"
                    size="39"
                    required
                />

                <br />
                <br />

                <textarea
                    type="text"
                    placeholder="Full Text"
                    onChange={saveFullText}
                    ref={getFullText}
                    name="text"
                    cols="41"
                    rows="10"
                />
                <br />
                <button>Save Post</button>
            </form>
        </>
    )
}

export default CreateNewPost;