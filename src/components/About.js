import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
        repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit
        eaque{" "}
      </p>
      <img src={image} alt="I made this"></img>
    </div>
  );
}

export default About;
