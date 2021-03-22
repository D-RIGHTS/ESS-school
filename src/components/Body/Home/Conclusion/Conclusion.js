import React, {useState} from "react";
import "./styles.css";


function Conclusion () {

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);


    return(

            <div className="Conclusion" >
            <section>
            <h3>
                <p>We, at EES Appreciate the time taken to see us through. Never hesitate picking up for phone and reaching out to us.</p>
                <br />
                <p>Cambridge English Qualifications are in-depth exams that make learning English enjoyable, effective and rewarding.</p>
                <br />
                <p>Our unique approach encourages continuous progression with a clear path to improve language skills. We have qualifications for schools, general and higher education, and business.</p>
                <br />
            </h3>
            <div className="comments">
                <span className="up">
                    <i onClick={() => setLike(like + 1)} className="far fa-thumbs-up"/>
                    <br />
                    {like}
                </span>
                <span className="down">
                    <i onClick={() => setDislike(dislike + 1)} className="far fa-thumbs-down"/>
                    <br />
                    {dislike}
                </span>
            </div>
            </section>
                <div className="picConclusion">
                    <img src={"Images/native-speakers.jpg"} alt=""/>
                </div>
        </div>
    )
}

export default Conclusion;