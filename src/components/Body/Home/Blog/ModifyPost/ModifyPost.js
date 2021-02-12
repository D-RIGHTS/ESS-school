import React from "react";


const ModifyPost = ({ title, description, fullText, saveTitle, saveDescription, saveFullText, updatePost }) => {
    return (
        <>
            <form>
                <h1>Modify Post!</h1>
                <br />

                <input
                    defaultValue={title}
                    onChange={saveTitle}
                    type="text"
                    placeholder="title"
                    size="39"
                    required
                />
                <br />
                <br />

                <input
                    defaultValue={description}
                    onChange={saveDescription}
                    type="text"
                    placeholder="description"
                    size="39"
                    required
                />
                <br />
                <br />

                <textarea
                    defaultValue={fullText}
                    onChange={saveFullText}
                    placeholder="Full Text"
                    name="text"
                    cols="41"
                    rows="10"
                    />
                <br />
                <button onClick={updatePost} >Update Post</button>
            </form>
        </>
    )
}

export default ModifyPost;