import React from "react";

// Additional
import styles from "../Review/Review.module.css";

const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li className={styles.review__item} key={id}>
          <p className={styles.user}>{author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
