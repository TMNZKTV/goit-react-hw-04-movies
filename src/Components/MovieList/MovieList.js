import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// Components
import MoviePreview from '../MoviePreview/MoviePreview';

// Additional
import styles from '../MovieList/MovieList.module.css';

const MovieList = ({ movies, location }) => {
    // const imgPath = 'https://image.tmdb.org/t/p/w500/';

    return (
        <ul className={styles.list}>
            {movies.map(({ id, poster_path, title }) => (
                <li key={id}>
                    <Link
                        className={styles.list_item}
                        to={{
                            pathname: `/movies/${id}`,
                            state: {
                                from: location,
                            },
                        }}
                    >
                        <MoviePreview
                            imgSrc={`https://image.tmdb.org/t/p/w500${poster_path}`}
                            title={title}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default withRouter(MovieList);
