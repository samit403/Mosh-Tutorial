import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  // State of the component
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  // event Handlers
  handleDelete = item => {
    const movies = this.state.movies.filter(e => e !== item);
    this.setState({ movies });
  };

  handleLike = item => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(item);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies: movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    console.log(genre);
    // let movies = [...this.state.movies];
    // const filteredMovies = movies.filter(
    //   movie => movie.genre.name === genre.name
    // );
    // // console.log(filteredMovies);
    // this.setState({ movies: filteredMovies });
  };

  // render function
  render() {
    if (this.state.movies.length === 0) {
      return (
        <span className="navbar-brand mb-0 h2">
          There are no movies in the database
        </span>
      );
    }

    const allMovies = paginate(
      this.state.movies,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <nav className="navbar navbar-light bg-light">
              <span className="navbar-brand mb-0 h2">
                There are {this.state.movies.length} Movies in the database
              </span>
            </nav>
            <table className="table table-light table-hover">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col">Like it?</th>
                  <th scope="col">Keep/Delete</th>
                </tr>
              </thead>
              <tbody>
                {allMovies.map(item => {
                  return (
                    <tr key={item._id}>
                      <td>{item.title}</td>
                      <td>{item.genre.name}</td>
                      <td>{item.numberInStock}</td>
                      <td>{item.dailyRentalRate}</td>
                      <td>
                        {/* Like component */}
                        <Like
                          liked={item.liked}
                          onLikeClick={() => this.handleLike(item)}
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => this.handleDelete(item)}
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
            <Pagination
              itemsCount={this.state.movies.length}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
        {/* pagination component */}
      </React.Fragment>
    );
  }
}

export default Movies;
