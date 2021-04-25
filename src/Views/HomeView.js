import React, { Component } from "react";
import Axios from "axios";

// Components
import MovieList from "../Components/MovieList/MovieList";

// Additional
import styles from "../Views/HomeView.module.css";

const apiKey = "0e02bce2bb8651f28e47e5fdc0b7d325";

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
    );

    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <h1 className={styles.title}>Trending today</h1>

        <MovieList movies={this.state.movies} />
      </>
    );
  }
}

export default HomeView;
