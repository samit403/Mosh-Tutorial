import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: item => (
        <Like liked={item.liked} onLikeClick={() => this.props.onLike(item)} />
      )
    },
    {
      key: "delete",
      content: item => (
        <button
          onClick={() => this.props.onDelete(item)}
          className="btn-danger btn-sm m-2"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    // console.log(this.props);
    return (
      <table className="table table-light table-hover">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;
