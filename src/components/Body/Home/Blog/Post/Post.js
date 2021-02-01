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