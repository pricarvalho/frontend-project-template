import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import PrivateRoute from "./components/PrivateRoute";
import keycloak from "./Keycloak"
import { ReactKeycloakProvider } from "@react-keycloak/web";

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <PrivateRoute>
              <NewMeetupPage />
            </PrivateRoute>
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
    </ReactKeycloakProvider>
  );
}

export default App;
