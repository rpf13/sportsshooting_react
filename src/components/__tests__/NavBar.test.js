import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from "../NavBar";

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

//   screen.debug();
const signInLink = screen.getByRole("link", { name: "SignIn" });
expect(signInLink).toBeInTheDocument();
});

test('renders link to the user profile for a logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>

        </Router>
    )
    const profileAvatar = await screen.findByAltText("avatar");
    expect(profileAvatar).toBeInTheDocument();
    const profileLink = screen.getByRole('link', { name: /apple/i });
    expect(profileLink.getAttribute('href')).toBe('/profiles/1');
})

test('renders sign in and sign up buttons again on log out and check all available links', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    )
    const signOutLink = await screen.findByRole('link', {name: 'SignOut'})
    fireEvent.click(signOutLink)

    const signInLink = await screen.findByRole('link', {name: 'SignIn'})
    const signUpLink = await screen.findByRole('link', {name: 'SignUp'})

    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /SignIn/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /SignUp/i })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Add match/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Add gun/i })).not.toBeInTheDocument();
});

test('renders logged-in navigation items when user is authenticated', async () => {
    render(
      <Router>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
      </Router>
    );
  
    await screen.findByAltText("avatar");
  
    expect(screen.getByRole('link', { name: /Add match/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Add gun/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /MySchedule/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /MyGuns/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /SignOut/i })).toBeInTheDocument();
  });



