import React from "react";
import "./styles.css";

const CreateNewPost = () => {
    return (
        <>
            <form>
                <h1>Create your Post!</h1>
                <br />
                <input type="text" placeholder="title" size="39" required />
                <br />
                <br />
                <input type="text" placeholder="description" size="39" required />
                <br />
                <br />
                <textarea placeholder="Full Text" name="text"  cols="41" rows="10"></textarea>
                <br />
                <button>Save Post</button>
            </form>
        </>
    )
}

export default CreateNewPost;