import React from 'react';

// Additional
import styles from '../MoviePreview/MoviePreview.module.css';

const MoviePreview = ({ imgSrc, title }) => {
    return (
        <div className={styles.card}>
            <div className={styles.movie_thumb}>
                <img src={imgSrc} alt={title} />
            </div>
            <div>
                <p className={styles.movie__title}>{title}</p>
            </div>
        </div>
    );
};

export default MoviePreview;
