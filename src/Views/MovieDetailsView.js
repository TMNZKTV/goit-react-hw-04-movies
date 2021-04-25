import Axios from "axios";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

// Components
import Cast from "../Components/Cast/Cast";
import Reviews from "../Components/Review/Review";

// Additional
import routes from "../routes";
import styles from "../Views/MovieDetailsView.module.css";

const apiKey = "0e02bce2bb8651f28e47e5fdc0b7d325";

class MovieDetailsView extends Component {
  state = {
    id: null,
    poster_path: null,
    title: null,
    popularity: null,
    overview: null,
    genres: [],
    reviews: [],
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const movieInfo = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    );
    const reviewInfo = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`
    );
    const castInfo = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
    );

    this.setState({
      ...movieInfo.data,
      reviews: reviewInfo.data.results,
      cast: castInfo.data.cast,
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      history.push(location.state.from);
    } else {
      history.push(routes.home);
    }
  };

  render() {
    // const imgPath = 'https://image.tmdb.org/t/p/w500/';
    const src = this.state.poster_path;

    const { title, popularity, overview, cast, reviews } = this.state;
    const { match } = this.props;

    return (
      <>
        <button
          className={styles.back__button}
          type="button"
          onClick={this.handleGoBack}
        >
          Вернуться назад
        </button>

        <div className={styles.movie__card}>
          <div className="1">
            <img
              src={`https://image.tmdb.org/t/p/w500/${src}`}
              alt="movie-poster"
            />
          </div>
          <div className={styles.about__movie}>
            <h1>{title}</h1>
            <p className={styles.about__info}>Rating</p>
            <p>{popularity}</p>
            <p className={styles.about__info}>Overview</p>
            <p>{overview}</p>
            <p className={styles.genres}>Genres</p>
            {this.state.genres &&
              this.state.genres.map(({ id, name }) => (
                <p className={styles.genre} key={id}>
                  {name}
                </p>
              ))}
          </div>
        </div>

        <div className={styles.info__card}>
          <p>Additional Information</p>
          <Link className={styles.info__link} to={`${match.url}/cast`}>
            <p>Cast</p>
          </Link>
          <Route
            path={`${match.path}/cast`}
            render={(props) => <Cast {...props} cast={cast} />}
          />

          <Link className={styles.info__link} to={`${match.url}/review`}>
            <p>Review</p>
          </Link>
          <Route
            path={`${match.path}/review`}
            render={(props) =>
              reviews.length > 0 ? (
                <Reviews reviews={reviews} />
              ) : (
                "No feedback yet!"
              )
            }
          />
        </div>
      </>
    );
  }
}

export default MovieDetailsView;

// картинка, название, оценка, описание, жанр
