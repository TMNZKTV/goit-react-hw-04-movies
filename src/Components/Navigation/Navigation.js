import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

// Additional
import styles from "../Navigation/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        exact
        to={routes.home}
        className={styles.NavLink}
        activeClassName={styles.NavLink__active}
      >
        Home
      </NavLink>

      <NavLink
        to={routes.movies}
        className={styles.NavLink}
        activeClassName={styles.NavLink__active}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
