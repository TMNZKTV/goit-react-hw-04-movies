import React, { Component } from 'react';
import queryString from 'query-string';

// Components
import MovieList from '../Components/MovieList/MovieList';
import SearchForm from '../Components/SearchForm/SearchForm';

// Additional
import moviesApi from '../Services/moviesApi';

class MoviesView extends Component {
    state = {
        query: '',
        movies: null,
        error: null,
    };

    componentDidMount() {
        const { search } = this.props.location;
        const parsedPrevSearch = queryString.parse(search);
        const prevQuery = parsedPrevSearch.query;

        this.setState({ query: prevQuery });

        if (prevQuery) {
            moviesApi
                .requestedMoviesFetch(prevQuery)
                .then(results => this.setState({ movies: results }))
                .catch(error => this.setState({ error }));
        }
    }

    handleChange = e => {
        this.setState({ query: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { query } = this.state;
        const { history } = this.props;

        query &&
            moviesApi
                .requestedMoviesFetch(query)
                .then(results => this.setState({ movies: results }))
                .catch(error => this.setState({ error }));

        history.push({
            search: `?query=${query}`,
        });

        this.setState({
            query: '',
        });
    };

    render() {
        const { movies, query } = this.state;

        return (
            <>
                <SearchForm
                    query={query}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />

                {movies && <MovieList movies={movies} />}
            </>
        );
    }
}

export default MoviesView;
