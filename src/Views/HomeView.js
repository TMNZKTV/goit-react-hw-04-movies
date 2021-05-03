import React, { Component } from 'react';
import Axios from 'axios';

// Components
import Heading from '../Components/Heading/Heading';
import MovieList from '../Components/MovieList/MovieList';
import Container from '../Components/Container/Container';

const apiKey = '0e02bce2bb8651f28e47e5fdc0b7d325';

class HomeView extends Component {
    state = {
        movies: [],
    };

    async componentDidMount() {
        const response = await Axios.get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`,
        );

        this.setState({ movies: response.data.results });
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
