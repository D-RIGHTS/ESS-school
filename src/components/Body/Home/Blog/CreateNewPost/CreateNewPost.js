import React from "react";
import "./styles.css";

const CreateNewPost = ({saveTitle, saveDescription, saveFullText}) => {
    return (
        <>
            <form>
                <h1>Create your Post!</h1>
                <br />
                <input type="text" onChange={saveTitle} placeholder="title" size="39" required />
                <br />
                <br />
                <input type="text" onChange={saveDescription} placeholder="description" size="39" required />
                <br />
                <br />
                <textarea type="text" placeholder="Full Text" onChange={saveFullText} name="text"  cols="41" rows="10" />
                <br />
                <button>Save Post</button>
            </form>
        </>
    )
}

export default CreateNewPost;