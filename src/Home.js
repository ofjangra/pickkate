import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="homeMain">
        <header className="homeHeader">
          {/* <h1>Pickkate</h1> */}
          <p>
            Explore a unique collecton of color palettes
            and fonts handpicked specially for web designers.
          </p>
        </header>

        <nav className="navbar">
          <div className="navlinks">
            <Link to="/colors" className="link">
            <div className="homeNavlink">
            <img src = "./img/bg1.jpg" alt = "colors"/>
            <strong>Color Pellates</strong>
            </div>
            </Link>
            <Link to="/fonts" className="link">
            <div className="homeNavlink">
            <img src = "./img/bg2.jpg" alt = "colors"/>
            <strong>Fonts</strong>
            </div>
            </Link>
            <Link to="/fontpairs" className="link">
            <div className="homeNavlink">
            <img src = "./img/bg3.jpg" alt = "colors"/>
            <strong>Font Pairs</strong>
            </div>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Home;
