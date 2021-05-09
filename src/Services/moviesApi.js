import axios from 'axios';

const key = '0e02bce2bb8651f28e47e5fdc0b7d325';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const popularMovieFetch = async () => {
    return await axios
        .get(`/trending/movie/day?api_key=${key}`)
        .then(response => response.data.results);
};

const requestedMoviesFetch = async query => {
    return await axios
        .get(`/search/movie?api_key=${key}&query=${query}`)
        .then(response => response.data.results);
};

const movieDetailsFetch = async movieId => {
    return await axios
        .get(`/movie/${movieId}?api_key=${key}`)
        .then(response => response.data);
};

const castFetch = async movieId => {
    return await axios
        .get(`/movie/${movieId}/credits?api_key=${key}`)
        .then(response => response.data.cast);
};

const reviewsFetch = async movieId => {
    return await axios
        .get(`/movie/${movieId}/reviews?api_key=${key}`)
        .then(response => response.data.results);
};

export default {
    popularMovieFetch,
    requestedMoviesFetch,
    movieDetailsFetch,
    castFetch,
    reviewsFetch,
};
