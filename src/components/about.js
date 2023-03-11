import React from "react";

export default function About() {
  return (
    <section className="container" style={{ backgroundColor: "gray", padding: 50, textAlign: "center"}}>
      <h1 style={{ color: "cyan" }}>About me</h1>
        <div>
          <br></br>
          <p className="m-10" style={{ color: "cyan", fontSize: 25, textAlign: "center" }}>
            Hello there! I'm Noah and welcome to my first portfolio page. 
            I am 23 years old and have lived in Dacula, Georgia my whole life but I've traveled around the country.
                    
            I am currently pursuing a career in software development.
            I am a fast learner, determined, and always up for a challenge! 
            Welcome to any opportunities that align with my goals in this career.
            Personal I can not wait to start producing some of my own projects and ideas to release into the world.
            Therefor, if you have something you would like me to create please feel free to let me know!
          </p>
          <br></br>
          <p className="m-10" style={{ color: "cyan", fontSize: 25, textAlign: "center" }}>
            In my free time, I enjoy the company of my dog and girlfriend. Also things like games, cars, and exercising.
          </p>
      </div>
    </section>
  )
}