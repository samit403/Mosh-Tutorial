import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { movies, onDelete, onLike } = this.props;
    console.log(this.props);

    return (
      <table className="table table-light table-hover">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")} scope="col">
              Title
            </th>
            <th onClick={() => this.raiseSort("genre.name")} scope="col">
              Genre
            </th>
            <th onClick={() => this.raiseSort("numberInStock")} scope="col">
              Stock
            </th>
            <th onClick={() => this.raiseSort("dailyRentalRate")} scope="col">
              Rate
            </th>
            <th scope="col">Like it?</th>
            <th scope="col">Keep/Delete</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(item => {
            return (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.genre.name}</td>
                <td>{item.numberInStock}</td>
                <td>{item.dailyRentalRate}</td>
                <td>
                  {/* Like component */}
                  <Like liked={item.liked} onLikeClick={() => onLike(item)} />
                </td>
                <td>
                  <button
                    onClick={() => onDelete(item)}
                    className="btn-danger btn-sm m-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
