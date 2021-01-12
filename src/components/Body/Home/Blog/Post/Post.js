import React from "react";
import "./styles.css";

function Post ({title,content}) {
    return (
        <>
            <section className="postSec">
                <h3 className="postTitle">{title}</h3>
                <p className="postParagraph">{content}</p>
                <button className="postEdit">Edit</button>
                <button className="postDelete" >Delete</button>
            </section>
        </>
    )
}

export default Post;