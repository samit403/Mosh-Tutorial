import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" }
  ];

  render() {
    const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
    console.log(this.props);

    return (
      <table className="table table-light table-hover">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
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
