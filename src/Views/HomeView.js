import React, { Component } from 'react';
import Axios from 'axios';

// Components
import Heading from '../Components/Heading/Heading';
import MovieList from '../Components/MovieList/MovieList';
import Container from '../Components/Container/Container';
import moviesApi from '../Services/moviesApi';

const apiKey = '0e02bce2bb8651f28e47e5fdc0b7d325';

class HomeView extends Component {
    state = {
        movies: [],
        error: null,
    };

    async componentDidMount() {
        moviesApi
            .popularMovieFetch()
            .then(movies => this.setState({ movies }))
            .catch(error => this.setState({ error }));
    }

    render() {
        return (
            <Container>
                <Heading>Trending now</Heading>

                <MovieList movies={this.state.movies} />
            </Container>
        );
    }
}

export default HomeView;
