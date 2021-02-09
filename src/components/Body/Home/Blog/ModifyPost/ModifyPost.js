import React from "react";


const ModifyPost = () => {
    return (
        <>
            <form>
                <h1>Modify Post!</h1>
                <br />
                <input type="text" placeholder="title" size="39" required />
                <br />
                <br />
                <input type="text" placeholder="description" size="39" required />
                <br />
                <br />
                <textarea placeholder="Full Text" name="text"  cols="41" rows="10"></textarea>
                <br />
                <button>Update Post</button>
            </form>
        </>
    )
}

export default ModifyPost;