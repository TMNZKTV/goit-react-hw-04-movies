import React, { Component } from "react";
import Axios from "axios";

// Components
import MovieList from "../Components/MovieList/MovieList";

// Additional
import styles from "../Views/MoviesView.module.css";

class MoviesView extends Component {
  state = {
    query: "",
    movies: [],
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=0e02bce2bb8651f28e47e5fdc0b7d325&query=${this.state.query}`
    ).then((response) => this.setState({ movies: response.data.results }));

    this.setState({
      query: "",
    });
  };

  render() {
    const { movies, query } = this.state;

    return (
      <>
        <div className={styles.search__field}>
          <form onSubmit={this.handleSubmit}>
            <input
              className={styles.input}
              onChange={this.handleChange}
              type="text"
              autoComplete="off"
              placeholder="Search for a movie"
              value={query}
            />
            <button type="submit" className={styles.search__button}>
              <span>Search</span>
            </button>
          </form>
        </div>

        <MovieList movies={movies} />
      </>
    );
  }
}

export default MoviesView;
