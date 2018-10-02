import React from 'react';
import Slider from "./Slider";

const Home = () => {
    return  (
    <main>
        <div className="hero">
        <div className="hero_text">
            <h1 className="h1">Welcome to Clark's Cakes</h1>
            <p>Take a look at at our products page to see our creations!</p>
        </div>
        </div> 
        <Slider /> 
    </main>
  )
};

export default Home;