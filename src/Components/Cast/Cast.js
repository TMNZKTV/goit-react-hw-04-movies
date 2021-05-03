import { Component } from 'react';
import PropTypes from 'prop-types';
import moviesApi from '../../Services/moviesApi';

import styles from '../Cast/Cast.module.css';

class Cast extends Component {
    state = {
        cast: [],
        error: null,
    };
    async componentDidMount() {
        const { movieId } = this.props.match.params;
        moviesApi
            .castFetch(movieId)
            .then(cast => this.setState({ cast }))
            .catch(error => this.setState({ error }));
    }

    componentDidUpdate() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    }

    render() {
        const { cast } = this.state;
        return (
            <ul className={styles.cast__list}>
                {cast.map(({ id, profile_path, character, name }) => (
                    <li key={id}>
                        <img
                            src={`http://image.tmdb.org/t/p/w185//${profile_path}`}
                            alt={name}
                        />
                        <p>{name}</p>
                        <p>Character: {character}</p>
                    </li>
                ))}
            </ul>
        );
    }
}

Cast.propTypes = {
    cast: PropTypes.arrayOf(PropTypes.object),
};

export default Cast;
