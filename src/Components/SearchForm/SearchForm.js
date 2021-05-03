import React from 'react';
import styles from '../SearchForm/SearchForm.module.css';

const SearchForm = ({ query, handleSubmit, handleChange }) => {
    return (
        <div className={styles.search__field}>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    placeholder="Search for a movie"
                    value={query || ''}
                />
                <button type="submit" className={styles.search__button}>
                    <span>Search</span>
                </button>
            </form>
        </div>
    );
};

export default SearchForm;
