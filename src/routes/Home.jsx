import React from 'react'
import {Link} from "react-router-dom"
import "./Home.css";

const Home = () => {
  return (
    <div>
       <Link to="/animals" ><img src="naali.jpg" class="item" alt="a picture of a mammal" /></Link>
       
      
      <Link to="/birds"><img src="bird.jpg" class="item" alt="a picture of a bird" /></Link>
      <Link to="/insects"><img src="insect.jpg" class="item" alt="a picture of an insect" /></Link>
      <Link to="/fishes"><img src="fish.jpg" class="item"  alt="a picture of a fish" /></Link>
    </div>
  );
};

export default Home