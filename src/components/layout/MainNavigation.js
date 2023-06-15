import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

import { useKeycloak } from "@react-keycloak/web";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  const { keycloak } = useKeycloak();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
          <li>
            {!keycloak.authenticated && (
              <button type="button" onClick={() => keycloak.login()}>
                Login
              </button>
            )}
          </li>

          <li>
            {!!keycloak.authenticated && (
              <button type="button" onClick={() => keycloak.logout()}>
                Logout
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
