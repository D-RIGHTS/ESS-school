import React, {useState} from "react";
import CreateNewPost from "../CreateNewPost/CreateNewPost";

const DisplayAllPosts = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [fullText, setFullText] = useState("");
    const [allPosts, setAllPosts] = useState([]);

    const saveTitle = event => {
        setTitle(event.target.value);
        console.log('title', title)
    };

    const saveDescription = event => {
        setDescription(event.target.value);
        console.log('description', description)
    };

    const saveFullText = event => {
        setFullText(event.target.value);
        console.log('fullText', fullText)
    };

    const savePost = () => {
        const id = Date.now();
        setAllPosts([...allPosts, {title, description, fullText, id}]);
        console.log('allPosts', allPosts);
    };



    return (
        <>
            <CreateNewPost
                saveTitle={saveTitle}
                saveDescription={saveDescription}
                saveFullText={saveFullText}
            />
        </>
    )
}

export default DisplayAllPosts;