import React from "react";

const CreatePost = ({saveComment, savePost, getComment}) => {
    return(
        <div>
            <form >
                <label htmlFor="text"></label>
                <input className="reviews"
                       type="text"
                       placeholder="Enter Comment here"
                       onChange={saveComment}
                       ref={getComment}
                />
                <button onClick={savePost} ><i className="fas fa-plus"></i></button>
            </form>
        </div>
    )
}

export default CreatePost;