import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import MatchCreateForm from "./pages/matches/MatchCreateForm";
import MatchPage from "./pages/matches/MatchPage";
import MatchesPage from "./pages/matches/MatchesPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import GunCreateForm from "./pages/guns/GunCreateForm";
import GunPage from "./pages/guns/GunPage";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MatchesPage message="No results found. Adjust the search keyword." />
            )}
          />
          <Route
            exact
            path="/attending"
            render={() => (
              <MatchesPage message="No results found. Adjust the search keyword or attend a match."
              filter={`attendings__owner__profile=${profile_id}&ordering=-attendings__created_at&`}
              />
            )}
          />          
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route
            exact
            path="/matches/create"
            render={() => <MatchCreateForm />}
          />
          <Route
            exact
            path="/guns/create"
            render={() => <GunCreateForm />}
          />          
          <Route exact path="/matches/:id" render={() => <MatchPage />} />
          <Route exact path="/guns/:id" render={() => <GunPage />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
