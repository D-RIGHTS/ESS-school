import React from "react";
import "./Objective/styles.css";

import Objective from "./Objective/Oblective";
import DisplayAllPosts from "./DisplayAllPosts/DisplayAllPosts.js";

function Blog () {
    return (
        <div>
            <Objective />
            <DisplayAllPosts />
        </div>
    )
}

export default Blog;