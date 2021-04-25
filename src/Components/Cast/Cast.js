import React from "react";

// Additional
import styles from "../Cast/Cast.module.css";

const Cast = ({ cast }) => {
  return (
    <ul className={styles.cast__list}>
      {cast.map(({ id, profile_path, original_name, character }) => (
        <li className={styles.cast__item} key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt="actor"
          />
          <p>{original_name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
