import React from "react";
import Form from "./common/form";

class NewMoviesForm extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      numberInStock: "",
      dailyRate: ""
    },
    errors: {}
  };

  doSubmit = () => {
    const movies = { ...this.state.data };
    console.log(movies);
    //update movies inside movies state in movies.jsx

    //call the server now
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div className="content">
        <h1 className="mt-5">Add New Movie</h1>
        <form className="mt-5" onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("dailyRate", "Rate", "number")}
          <button className="btn btn-primary">Add New Movie</button>
        </form>
      </div>
    );
  }
}

export default NewMoviesForm;
