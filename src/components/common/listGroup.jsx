import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const ListGroup = props => {
  const genres = props.genres;

  return (
    <div className="list-group">
      <button
        className="list-group-item list-group-item-action"
        style={{ cursor: "pointer" }}
        onClick={props.onAllGenresClick}
      >
        All Genres
      </button>
      {/* dynamically generate other genres in the list group */}
      {genres.map(genre => (
        <button
          key={genre._id}
          style={{ cursor: "pointer" }}
          className="list-group-item list-group-item-action"
          onClick={() => props.onGenreClick(genre)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default ListGroup;
