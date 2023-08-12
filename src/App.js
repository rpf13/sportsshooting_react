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
import GunsPage from "./pages/guns/GunsPage";
import MatchEditForm from "./pages/matches/MatchEditForm";
import GunEditForm from "./pages/guns/GunEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import NotFound from "./components/NotFound";
import ErrorModal from "./components/ErrorModal";
import { createContext, useState } from "react";

export const ErrorContext = createContext();

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleError = () => {
    setShowErrorModal(true);
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <ErrorContext.Provider value={handleError}>
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
                <MatchesPage
                  message="No results found. Adjust the search keyword or attend a match."
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
              path="/matches/:id/edit"
              render={() => <MatchEditForm />}
            />
            <Route exact path="/matches/:id" render={() => <MatchPage />} />
            <Route exact path="/guns/create" render={() => <GunCreateForm />} />
            <Route
              exact
              path="/guns"
              render={() => (
                <GunsPage message="No resuls found. Adjust the search or add a gun" />
              )}
              filter={`owner__profile=${profile_id}`}
            />
            <Route exact path="/guns/:id/edit" render={() => <GunEditForm />} />
            <Route exact path="/guns/:id" render={() => <GunPage />} />
            <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
            <Route
              exact
              path="/profiles/:id/edit/username"
              render={() => <UsernameForm />}
            />
            <Route
              exact
              path="/profiles/:id/edit/password"
              render={() => <UserPasswordForm />}
            />
            <Route
              exact
              path="/profiles/:id/edit"
              render={() => <ProfileEditForm />}
            />
            <Route render={() => <NotFound />} />
          </Switch>
        </Container>
        <ErrorModal show={showErrorModal} onClose={closeErrorModal} />
      </div>
    </ErrorContext.Provider>
  );
}

export default App;
