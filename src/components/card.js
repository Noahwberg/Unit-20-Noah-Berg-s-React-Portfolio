import React from "react";
const styles = {
  image: {
    width: "100%"
    , marginBottom: 20
  }
  , container: {
      height: "65%"
      , backgroundColor: "white"
      , textAlign: "center"
      , overflow: "hidden"
  }
  , cards: {
      height: 500
      , width: 500
      , position: "relative"
  }
};
export default function Cards(params) {
  return (
    <div className="card m-3 border-dark" style={styles.cards}>
      <div style={styles.container}>
        <img style={styles.image} alt={params.name} src={params.image} />
      </div>
      <div style={{textAlign: "center", fontSize: 25, color: "black"}}>
      <p className="card-title">{params.name}</p>
      <p>
        <a href={params.repo} rel="noopener noreferrer" target="_blank">
          <img
            src="https://img.icons8.com/fluent/48/000000/github.png"
            alt="GitHub Repo"
          />
        </a>
        <a href={params.link} rel="noopener noreferrer" target="_blank">
          <img
            src="https://img.icons8.com/fluent/48/000000/web.png"
            alt="Deployed Link"
          />
        </a>
      </p>
    </div>
  </div>
  );
}