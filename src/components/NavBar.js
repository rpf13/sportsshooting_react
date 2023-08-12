import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo_title_small.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../helper/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  // destructure the objects of the useClickOutsideToggle custom hook
  const {expanded, setExpanded, ref} = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  const addMatchIcon = (
    <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/matches/create"
      >
        <i className="fa-regular fa-calendar-plus"></i>Add match
      </NavLink>
  )

  const addGunIcon = (
    <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/guns/create"
      >
        <i className="fa-regular fa-square-plus"></i>Add gun
      </NavLink>
  )

  const loggedInIcons = <> 
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/attending"
      >
        <i className="fa-solid fa-calendar-days"></i>MySchedule
      </NavLink>

      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/guns"
      >
        <i className="fa-solid fa-gun"></i>MyGuns
      </NavLink>
      
      <NavLink
        className={styles.NavLink}
        to="/"
        onClick={handleSignOut}
      >
        <i className="fa-solid fa-right-from-bracket"></i>SignOut
      </NavLink>

      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text={currentUser?.username} height={35} />
      </NavLink>
   </>

  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fa-solid fa-right-to-bracket"></i>SignIn
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signup"
      >
        <i className="fa-solid fa-user-plus"></i>SignUp
      </NavLink>{" "}
    </>
  );

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="lg" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="80" />
          </Navbar.Brand>
        </NavLink>

        {/* only show match icon if user exists / logged in */}
        {currentUser && addMatchIcon}
        {/* only show gun icon if user exists / logged in */}
        {currentUser && addGunIcon}

        <Navbar.Toggle 
          ref={ref}
          onClick={() => setExpanded(!expanded)} 
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fa-solid fa-trophy"></i>Matches
            </NavLink>
            {/* ternary logic to display icons depending on user login state */}
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
