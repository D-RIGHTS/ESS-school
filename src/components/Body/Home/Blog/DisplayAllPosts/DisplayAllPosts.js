import React, {  useEffect, useContext } from "react";
import CreateNewPost from "../CreateNewPost/CreateNewPost";
import Post from "../Post/Post"
import ModifyPost from "../ModifyPost/ModifyPost";
import "./styles.css";
import AxiosInstance from "../../../../../axiosInts"
import {BlogContext} from "../BlogContext";


const DisplayAllPosts = () => {

    const [ title, setTitle,description,setDescription,fullText,setFullText, allPosts, setAllPosts, isCreateNewPost, setIsCreateNewPost, isModifyPost, setIsModifyPost, editPostId, setEditPostId, getTitle, getDescription, getFullText ] = useContext(BlogContext)


    useEffect(() => {
        console.log('allPosts', allPosts)
    }, [allPosts])

    const saveTitle = event => {
        setTitle(event.target.value)
        // console.log('title', title)
    }

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

        AxiosInstance.delete("/posts/id",
            {
            headers: {
                // eslint-disable-next-line no-template-curly-in-string
                authorization: "Bearer ${accessToken}"
            }
        }).then((response) => {
            console.log('response', response)
        })
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

        AxiosInstance.patch("/posts/.id", {
            title:title,
            description:description,
            fullText:fullText
        }, {
            headers:{
                // eslint-disable-next-line no-template-curly-in-string
                Authorization: "Bearer ${accessToken}"
            }
        }).then((response) => {
            console.log('response', response)
        })
    };

    const savePost = event => {
        event.preventDefault();
        const id = Date.now();
        setAllPosts([...allPosts, { title, description, fullText, id }]);
        // console.log('allPosts', allPosts);
        setTitle("");
        setDescription("");
        setFullText("");
        getTitle.current.value="";
        getDescription.current.value="";
       getFullText.current.value="";
       toggleCreateNewPost()

        AxiosInstance.post("/posts", {
            title:title,
            description:description,
            fullText:fullText
        }, {
            headers:{
                // eslint-disable-next-line no-template-curly-in-string
                Authorization: "Bearer ${accessToken}"
            }
        }).then((response) => {
            if (response.status === 200) {
                alert('200: Request Sent')
            }
            console.log('response', response)
        })
        //     .catch(err => {
        //     if (err.response.status === 403) {
        //         alert('403: Forbidden');
        //     };
        //
        //     if (err.response.status === 400) {
        //         alert('400: Bad request')
        //     };
        //
        //     if (err.response.status === 500) {
        //         alert('500: Server Error')
        //     }
        // })

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
        const post = allPosts.find((post) => {
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
              <h3 className="BlogDes"> Essential English Current Posts</h3>
              {!allPosts.length ? (
                  <div>
                      <h4 className="BlogNos">Nothing to Display!</h4>
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
              <button className="CreateButton" onClick={toggleCreateNewPost} >Click to Create New Post</button>
          </div>
        </>
    )
    }




export default DisplayAllPosts;