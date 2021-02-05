import React from "react";
import "./HeroSection/styles.css"
import HeroSection from "./HeroSection/HeroSection";
import LevelCards from "./LevelCards/LevelCards";
import Blog from "./Blog/Blog";


function Home () {
    return(
        <div className="Home-styles">
           <HeroSection />
           <LevelCards />
           <Blog />


        </div>
    )
}

export default Home;