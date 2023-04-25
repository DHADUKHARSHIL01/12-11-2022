import React, { useEffect, useState } from "react";

function Main() {
  useEffect(() => {
    console.log("hello");
  }, []);

  const [number, setNumber] = useState(0);

  return (
    <div className="container">
      <h2>Learning useEffect</h2>
      <div className="card">
        <div className="card body">
          <h1>{number}</h1>
          <button
            className="btn btn-primary w-25"
            onClick={() => setNumber(number + 1)}
          >
            +
          </button>
          <button
            className="btn btn-danger w-25"
            onClick={() => setNumber(number - 1)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
