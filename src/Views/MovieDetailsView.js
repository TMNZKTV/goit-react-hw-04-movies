import React, { Component, lazy } from 'react';
import { NavLink, Route } from 'react-router-dom';

// Components

import Button from '../Components/Button/Button';
import MovieDetailsCard from '../Components/MovieDetailsCard/MovieDetailsCard';
import Container from '../Components/Container/Container';

// Additional
import moviesApi from '../Services/moviesApi';

const Cast = lazy(() =>
    import('../Components/Cast/Cast' /* webpackChunkName: "Cast-component" */),
);
const Reviews = lazy(() =>
    import(
        '../Components/Reviews/Reviews' /* webpackChunkName: "Reviews-component" */
    ),
);
class MovieDetailsView extends Component {
    state = {
        movieData: null,
        locationState: null,
        error: null,
        cast: null,
        reviews: null,
    };

    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const { location } = this.props;

        moviesApi
            .movieDetailsFetch(movieId)
            .then(movieData =>
                this.setState({
                    locationState: location?.state?.from,
                    movieData,
                }),
            )
            .catch(error => this.setState({ error }));
    }

    handleGoBack = () => {
        const { history } = this.props;
        history.push(this.state?.locationState || '/');
    };

    render() {
        const { movieData } = this.state;
        const { match } = this.props;

        return (
            <Container>
                <Button type="submit" onClick={this.handleGoBack}>
                    Вернуться назад
                </Button>

                {movieData && <MovieDetailsCard movieData={movieData} />}

                <>
                    <p>Additional Information</p>
                    <NavLink to={`${match.url}/cast`}>
                        <p>Cast</p>
                    </NavLink>

                    <NavLink to={`${match.url}/review`}>
                        <p>Review</p>
                    </NavLink>

                    <Route path={`${match.path}/cast`} component={Cast} />
                    <Route path={`${match.path}/review`} component={Reviews} />
                </>
            </Container>
        );
    }
}

export default MovieDetailsView;
