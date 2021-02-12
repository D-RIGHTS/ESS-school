import React from "react";
import "./styles.css";

const Post = ({ title, description, fullText, editPost, deletePost, id }) => {
    return (
        <>
            <section className="postSec">
                <h4 className="postTitle">{title}</h4>
                <h5 className="postDescription">{description}</h5>
                <p className="postParagraph">{fullText}</p>
                <button onClick={() => editPost(id)} className="postEdit">Edit</button>
                <button onClick={() => deletePost(id)} className="postDelete">Delete</button>
            </section>
        </>
    )
}

export default Post;