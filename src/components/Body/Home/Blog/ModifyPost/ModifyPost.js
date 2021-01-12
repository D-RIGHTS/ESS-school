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