import React from "react";
import DisplayPost from "./DisplayPost"



function Objective () {

    const [likes, setLikes] = React.useState(0);
    const [dislikes, setDislikes] = React.useState(0);




    return (
        <div className="Objective">
            <article className="ObjectiveContainer">
                <div className="txt">
                    <p>
                        Our objective as an online learning specialist is to make higher education more accessible, engaging and beneficial for people everywhere, and we currently offer more than fifty versatile programmes across a wide range of fields.
                    </p>
                    <br />
                    Throughout our 25+ years of experience we have supported over 50,000 students, whilst staying true to our core values of making life-changing higher education accessible to all. We wish you luck with your application, and hope to welcome you as one of our students soon.
                    <br />
                    <div className="likes">
                       <div className="up">
                           <i onClick={ ()=> setLikes(likes + 1) } className="far fa-thumbs-up"></i>
                           <br />
                           {likes}
                       </div>
                        <div className="down">
                            <i onClick={ () => setDislikes(dislikes + 1) } className="far fa-thumbs-down"></i>
                            <br />
                            {dislikes}
                        </div>
                    </div>
                    <br />
                    <div className="reviewsform">
                        <DisplayPost />

                    </div>
                </div>
                <div className="Objectivepic">
                    <img src="Images/BlogImage.jpg" alt=""/>
                </div>
            </article>
        </div>
    )
}

export default Objective;