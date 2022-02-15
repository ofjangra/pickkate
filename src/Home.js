import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const Home = () => {

  const [minHeight, setMinHeight] = useState();

  useEffect(() =>{
    let deviceHeight = window.innerHeight;
    setMinHeight(deviceHeight)
  })
  return (
    <>
      <div className="homeMain" style ={{minHeight: minHeight < 620 ? 620 : minHeight}}>
        <div className="sideHeader">
          <p>
            On pickate we have a unique collection of color palettes and fonts handpicked for web-designers.
          </p>
        </div>
        <nav className="homeSideNav">
          <h2>Explore</h2>
          <ul>
            <Link to = '/colors' className="link"> 
            <li>
              Colors
            </li>
            </Link>
            <Link to = "/fonts" className="link">
            <li>
              Fonts
            </li>
            </Link>
            <Link to = "/fontpairs" className="link">
            <li>
              Font Pairs
            </li>
            </Link>
          </ul>
        </nav>
        <div className="aboutDiv">
          <p>about</p>
        </div>
      </div>
    </>
  );
};

export default Home;
