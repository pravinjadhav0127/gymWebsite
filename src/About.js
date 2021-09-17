import React from "react";
import photo from "./img/img7.jpg";
import { NavItem, NavLink } from "reactstrap";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about_img">
          <img src={photo} />
        </div>
        <div className="about_text">
          <h1>Learn More About Us</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            ducimus quis libero alias doloribus quidem nobis animi fuga beatae
            laudantium
          </p>
          <button>
            <NavLink href="https://www.gymandfitness.com.au/">
              Read More About
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};
export default About;
