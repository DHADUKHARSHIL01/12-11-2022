import React from "react";

function Movie(props) {
  return (
    <div className="card col-md-3 m-3" style={{ width: "18rem" }}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.movieName}</h5>
        <p className="card-text">{props.dis}</p>
        <a href={props.link} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Movie;
