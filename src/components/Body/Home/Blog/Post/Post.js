import React from "react";
import "./styles.css";

const Post = ({ title, description, fullText, editPost, deletePost, id }) => {
    return (
        <>
            <section className="postSec">
                <h3 className="postTitle">{title}</h3>
                <h4 className="postDescription">{description}</h4>
                <p className="postParagraph">{fullText}</p>
                <button onClick={() => editPost(id)} className="postEdit"><i className="fas fa-user-edit"/></button>
                <button onClick={() => deletePost(id)} className="postDelete"><i className="far fa-trash-alt"/></button>
            </section>
        </>
    )
}

export default Post;