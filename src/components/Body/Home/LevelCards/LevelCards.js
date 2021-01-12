import React from "react";
import "./styles.css";
import {Link} from "react-router-dom";

const Lessons = [
    {
        id: 1,
        img: 'Images/HeroSectionPic.jpg',
        title: 'General English Knowledge',
        description: 'EES has helped over +5 000 people ascertain their dreams by learning General English that helped them land their dream job. Do not hesitate. Ring us at any time'
    },
    {
        id: 2,
        img: 'Images/Academic.jpg',
        title: 'Academic English Knowledge',
        description: 'Are you planning on studying abroad? Worry not! ESS prepares students for TOELF & IELTS exams. We are not side-lining other students! All are welcome to ESS'
    },
    {
        id: 3,
        img: 'Images/BusinessEnglish.jpg',
        title: 'Business Lexico',
        description: 'We do not only focus on landing you a dream job, but also broaden your Business Lexico as well.'
    },
    {
        id: 4,
        img: 'Images/IELTS.jpg',
        title: 'IELTS',
        description: 'Let us achieve a min band score of 7.5 for all 4 exams.'
    },
    {
        id: 5,
        img: 'Images/Listening.jpg',
        title: 'Listening',
        description: 'If you want to specialize and focus only on Listening, you have landed on the right page'
    },
    {
        id: 6,
        img: 'Images/Reading.jpg',
        title: 'Reading',
        description: 'Does reading a 2 000 word Essay or presentation overwhelm you? Look for further. '
    },
    {
        id: 7,
        img: 'Images/Speaking.jpg',
        title: 'Speaking',
        description: 'Do you have an issue with pronunciation, coherence and articulation? EES has you covered'
    },
    {
        id: 8,
        img: 'Images/writing.jpg',
        title: 'Writing',
        description: 'Have the most legible handwriting and writing skills. ESS is ready to take you to another level writing-wise'
    }
];

function LevelCards () {
    return(
        <div>
            <div className="LevelCardsContainer">
                {Lessons.map(({id, img, title, description}) =>
                <LessonBreakdown
                    key={`${id}Lessons`}
                    img={img}
                    title={title}
                    description={description}
                />
                )}

            </div>
        </div>
    )
}

const LessonBreakdown = ({img, title, description}) => {
    return(
        <div>
            <div className="cardLess">
                <img className="LevelImages" src={img} alt=""/>
                <h2 className="LevelTitle">{title}</h2>
                <h4 className="LevelDescription">{description}</h4>
                <button className="levelbtn">
                    <Link to="/OfflineNote">Learn More</Link>
                </button>
            </div>
        </div>
    )
}

export default LevelCards;