import React from "react";
import "./HeroSection/styles.css"
import HeroSection from "./HeroSection/HeroSection";
import LevelCards from "./LevelCards/LevelCards";
import Blog from "./Blog/Blog";
import Conclusion from "./Conclusion/Conclusion";
import Objective from "./Objective/Oblective";



function Home () {
    return(
        <div className="Home-styles">
           <HeroSection />
           <Objective />
           <LevelCards />
           <Blog />
           <Conclusion />


        </div>
    )
}

export default Home;