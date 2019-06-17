import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";

class Movies extends Component {
  // State of the component
  state = {
    movies: [],
    genres: [],
    selectedGenre: null,
    pageSize: 4,
    currentPage: 1,
    sortColumn: {
      path: "title",
      order: "asc"
    }
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  // event Handlers
  handleDelete = item => {
    const movies = this.state.movies.filter(e => e !== item);
    this.setState({ movies });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
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
    this.setState({ selectedGenre: genre, currentPage: 1 });
    // console.log(this.state.selectedGenre);
  };

  // render function
  render() {
    const {
      movies,
      genres,
      selectedGenre,
      currentPage,
      pageSize,
      sortColumn
    } = this.state;

    if (movies.length === 0) {
      return (
        <span className="navbar-brand mb-0 h2">
          There are no movies in the database
        </span>
      );
    }

    // movies are filtered first
    const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter(movie => movie.genre._id === selectedGenre._id)
        : movies;

    // now we sort the data

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    // then pagination happens here
    const pagedMovies = paginate(sorted, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2 mt-3">
            <ListGroup
              items={genres}
              selectedItem={selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <h5 className="p-3">
              There are {filtered.length} Movies in the database
            </h5>
            <MoviesTable
              movies={pagedMovies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
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
