import React, { useState, useRef } from "react";
import CreateNewPost from "../CreateNewPost/CreateNewPost";
import Post from "../Post/Post"
import ModifyPost from "../ModifyPost/ModifyPost";
import "./styles.css";
import axios from "axios";

const DisplayAllPosts = () => {

                // useState Initializers
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [fullText, setFullText] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);
    const [isModifyPost, setIsModifyPost] = useState(false);
    const [editPostId, setEditPostId] = useState("");

                // useRef Initializers
    const getTitle = useRef();
    const getDescription = useRef();
    const getFullText = useRef();

    const saveTitle = event => {
        setTitle(event.target.value);
        // console.log('title', title)
    };

    const saveDescription = event => {
        setDescription(event.target.value);
        // console.log('description', description)
    };

    const saveFullText = event => {
        setFullText(event.target.value);
        // console.log('fullText', fullText)
    };

    const toggleCreateNewPost = () => {
        setIsCreateNewPost(!isCreateNewPost)
    }

    const toggleModify = () => {
        setIsModifyPost(!isModifyPost)
    }

    const editPost = id => {
        setEditPostId(id);
        console.log('id', id)
        toggleModify();
    }

    const deletePost = id => {
        const modifiedPost = allPosts.filter(eachPost => {
            return eachPost.id !== id;
        });
        setAllPosts(modifiedPost)
    };

    const updatePost = (event) => {
        event.preventDefault();
        const updatedPost = allPosts.map(eachPost => {
            if(eachPost.id === editPostId) {
                console.log('[eachPost.id, editPost]',[eachPost.id, editPostId])
                return {
                    ...eachPost,
                    title: title || eachPost.title,
                    description: description || eachPost.description,
                    fullText:fullText || eachPost.fullText
                };
            }
            console.log('eachPost', eachPost)
            return eachPost;
        });
        setAllPosts(updatedPost);
        toggleModify();

        // axios.update("http://localhost:3001/api/v1/posts", {
        //     title:title,
        //     description:description,
        //     fullText:fullText
        // }, {
        //     headers:{
        //         Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwMjNmNTM0NGVhZTVlNGI0ZmI4M2VlMSIsIm5hbWUiOiJEdW1pc2FuaSBSb2RyaWNrIiwiZW1haWwiOiJyb2RyaWNrZHVtaUByaWdodHMuY29tIiwiZGF0ZUNyZWF0ZWQiOiIyMDIxLTAyLTEwVDE1OjAxOjA4LjIxMloiLCJfX3YiOjB9LCJpYXQiOjE2MTMxNDQyNzgsImV4cCI6MTYxMzE0Nzg3OH0.J5JFcz6_fKCuJKy3bMMafrY445BUgIPFRO_hfXAN_hQ"
        //     }
        // }).then((response) => {
        //     console.log('response', response)
        // })
    };

    const savePost = event => {
        event.preventDefault();
        const id = Date.now();
        setAllPosts([...allPosts, { title, description, fullText, id }]);
        console.log('allPosts', allPosts);
        setTitle("");
        setDescription("");
        setFullText("");
        getTitle.current.value="";
        getDescription.current.value="";
       getFullText.current.value="";
       toggleCreateNewPost()

        axios.post("http://localhost:3001/api/v1/posts", {
            title:title,
            description:description,
            fullText:fullText
        }, {
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwMjNmNTM0NGVhZTVlNGI0ZmI4M2VlMSIsIm5hbWUiOiJEdW1pc2FuaSBSb2RyaWNrIiwiZW1haWwiOiJyb2RyaWNrZHVtaUByaWdodHMuY29tIiwiZGF0ZUNyZWF0ZWQiOiIyMDIxLTAyLTEwVDE1OjAxOjA4LjIxMloiLCJfX3YiOjB9LCJpYXQiOjE2MTMxNDQyNzgsImV4cCI6MTYxMzE0Nzg3OH0.J5JFcz6_fKCuJKy3bMMafrY445BUgIPFRO_hfXAN_hQ"
            }
        }).then((response) => {
            console.log('response', response)
        })

    };




    if(isCreateNewPost) {
        return (
            <>
                <CreateNewPost
                    saveTitle={saveTitle}
                    saveDescription={saveDescription}
                    saveFullText={saveFullText}
                    getTitle={getTitle}
                    getDescription={getDescription}
                    getFullText={getFullText}
                    savePost={savePost}
                    deletePost={deletePost}
                />
            </>
        )
    }
    else if (isModifyPost) {
        const post = allPosts.find(post => {
            return post.id === editPostId;
        });
        return (
            <ModifyPost
                title={title}
                description={description}
                fullText={fullText}
                updatePost={updatePost}
                saveTitle={saveTitle}
                saveDescription={saveDescription}
                saveFullText={saveFullText}
            />
        )
    }
    return (
        <>
          <div className="Displaying">
              <h2> Current Posts</h2>
              {!allPosts.length ? (
                  <div>
                      <h3>Nothing to Display</h3>
                  </div>
              ) : (
                   allPosts.map(eachPost => {
                      return (
                          <Post
                              id={eachPost.id}
                              key={eachPost.id}
                              title={eachPost.title}
                              description={eachPost.description}
                              fullText={eachPost.fullText}
                              editPost={editPost}
                              deletePost={deletePost}
                          />
                      );
                  })
              ) }
              <br />
              <br />
              <button onClick={toggleCreateNewPost} >Create New Post</button>
          </div>
        </>
    )
    }




export default DisplayAllPosts;