import React, { useState } from "react";
import "./styles.css";
import CreateNewPost from "../CreateNewPost/CreateNewPost";
import Post from "../Post/Post";


function DisplayAllPosts () {
    //useState inits
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);

    const onChange= ({ target }) => {
        const { name, value } = target;
        if(name === 'setContent') {
            setContent(value);
        } else if(name === 'setTitle') {
            setTitle(value);
        }
    };

    //toggle
    const toggleCreateNewPost = () => {
        setIsCreateNewPost(!isCreateNewPost)
    }

    const savePost = event => {
        event.preventDefault();
        setAllPosts([...allPosts, {title, content}]);
        console.log({title, content});
        setTitle("");
        setContent("");
    };

    return (
        <>
            <button onClick={toggleCreateNewPost}>Create New</button>
            {isCreateNewPost && <CreateNewPost
                onChange={onChange}
                savePost={savePost}
                title={title}
                content={content}
            />}
            <>
                <h2>All Posts</h2>
                {!allPosts.length ? (
                    <div>
                        <h3>
                            There is nothing to see here!
                        </h3>
                    </div>
                ) : (
                    allPosts.map(eachPost => {
                        return (
                            <Post
                                id={eachPost.id}
                                key={eachPost.id}
                                title={eachPost.title}
                                content={eachPost.content}
                            />
                        );
                    })
                )}
                <br/>
            </>
        </>
    )

}

export default DisplayAllPosts;