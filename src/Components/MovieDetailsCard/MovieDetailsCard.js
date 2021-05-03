import React from 'react';
import styles from '../MovieDetailsCard/MovieDetailsCard.module.css';

const movieDetailsCard = ({ movieData }) => {
    return (
        <div className={styles.movie__card}>
            <div className="1">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
                    alt="movie-poster"
                />
            </div>
            <div className={styles.about__movie}>
                <h1>{movieData.title}</h1>
                <p className={styles.about__info}>Rating</p>
                <p>{movieData.popularity}</p>
                <p className={styles.about__info}>Overview</p>
                <p>{movieData.overview}</p>
                <p className={styles.genres}>Genres</p>

                {movieData.genres.map(({ id, name }) => (
                    <p className={styles.genre} key={id}>
                        {name}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default movieDetailsCard;
