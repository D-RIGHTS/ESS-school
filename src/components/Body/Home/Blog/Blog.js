import React from "react";
import "../Objective/styles.css";
import DisplayAllPosts from "./DisplayAllPosts/DisplayAllPosts"
import {BlogProvider} from "./BlogContext";

function Blog () {
    return (
        <BlogProvider>
            <DisplayAllPosts />
        </BlogProvider>
    )
}

export default Blog;