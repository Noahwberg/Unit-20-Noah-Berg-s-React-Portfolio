import React from "react";
import Cards from "./card.js";

const Projects = [
  {
    "id": 1
    , "name": "Password Generator"
    , "image": "./images/PasswordGenerator.png"/////////////////////////////////////////////////////////
    , "link": "https://noahwberg.github.io/Password-Generator/"
    , "repo":  "https://github.com/Noahwberg/Password-Generator"
  }
  , {

      "id": 2
      , "name": "Notes Taker"
      , "image": "./images/NoteTaker.png"/////////////////////////////////////////////////////////
      , "link": "https://unit-11-note-taker.herokuapp.com/"
      , "repo": "https://github.com/Noahwberg/Unit-11-Note-Taker"
  }
  
];
function Portfolio() {
  return (
    <section className="container" style={{ display: "flex", justifyContent: "center" }}>
      <div className="project">
        <h1 style={{ color: "black" }}>Portfolio</h1>
        <br></br>
      </div>
      <div className="col-md-4">
        {Projects.map((project) => (
          <Cards
            key={project.id}
              name={project.name}
              image={project.image}
              repo={project.repo}
              link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;