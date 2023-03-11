import React from "react";
import imgOfMe from "./images/MomAndMe.jpg";
const styles = {
  section:{
      display: "flex"
      , justifyContent: "center"
    }
  , image: {
      width: "auto"
      , height: 400
      , flexWrap: "wrap"
      , justifyContent: "flex-end"
      , alignItems: "center"
      , backgroundPosition: "center"
      , backgroundSize: "cover"
    }
  , text: {
      color: "black"
      , fontSize: 25
    }
};
export default function HomePage() {
  return (

    <section style={styles.section}>
      
      <img style={styles.image} src={imgOfMe} alt="fishing"/>

      <div className="m-5">

          <h1 className="text-center" style={{ color: "black"}}> Noah Berg </h1>
            <br></br>
          <p className="text-center" style={styles.text}>
            Junior Software Developer
          </p>

      </div>
    </section>
  );
}