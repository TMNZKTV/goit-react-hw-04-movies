import styles from '../Container/Container.module.css';

const Container = ({ children }) => (
    <div className={styles.Container}>{children}</div>
);
export default Container;
