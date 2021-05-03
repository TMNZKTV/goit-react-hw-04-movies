import React from 'react';
import styles from '../Button/Button.module.css';

const Button = ({ children, type, onClick }) => {
    return (
        <button type={type} className={styles.back__button} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
