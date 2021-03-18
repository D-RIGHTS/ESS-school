import React, {useState, useRef, useEffect} from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";

const DisplayPost = () => {

    //useState Initializers
    const [comment, setComment] = useState("");
    const [allPost, setAllPost] = useState([]);
    const [isCreatePost, setIsCreatePost] = useState(false);

    //useRef Initializers
    const getComment = useRef()

    //useEffect Initializers
    useEffect(()=> {
        console.log('allPost', allPost)
    }, [allPost])


    //OnChange Handler
    const saveComment = event => {
        setComment(event.target.value);
        // console.log('comment', comment)
    }

    //onClick Handler
    const savePost = (e) => {
        e.preventDefault();
        const id = Date.now();
        setAllPost([...allPost, {comment, id}]);
        // console.log('allPost', allPost)
        getComment.current.value="";
        toggleCreatePost()
    }

    //toggleCreatePost
    const toggleCreatePost = () => {
        setIsCreatePost(!isCreatePost)
    }



  if(isCreatePost) {
      return (
          <>
              <CreatePost
                  saveComment={saveComment}
                  getComment={getComment}
                  savePost={savePost}

              />
          </>
      )
  }
  return (
      <>
        <div>
            <h4>Added Comments</h4>
            {!allPost.length ? (
                <div>
                    <h5>No comments</h5>
                </div>
            ) : (
                allPost.map ((eachPost) => {
                    return (
                        <Post
                            id={eachPost.id}
                            key={eachPost.id}
                            comment={eachPost.comment}
                        />
                    );
                })
            )}
            <br />
            <button onClick={toggleCreatePost}><i className="fas fa-user-plus"></i></button>
        </div>
      </>
  )
}

export default DisplayPost;