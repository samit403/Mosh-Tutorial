import React from "react";

const MoviesForm = ({ match, history }) => {
  // console.log(match);
  return (
    <div>
      <h1>Movie ID - {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MoviesForm;
