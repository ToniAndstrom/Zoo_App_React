import React from 'react'
import {Link} from "react-router-dom"
import "./Home.css";

const Home = () => {
  return (
    <div className="landing_page">
       <Link to="/animals" className="item1"><p className="home_p">ANIMALS</p></Link>
       <Link to="/birds" className="item2"><p className="home_p">BIRDS</p></Link>
      <Link to="/insects" className="item3"><p className="home_p">INSECTS</p></Link>
      <Link to="/fishes" className="item4"><p className="home_p">FISH</p></Link>
    </div>
  );
};

export default Home