import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Gun from "./Gun"

import appStyles from "../../App.module.css";
import styles from "../../styles/GunsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no_results.png"
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


function GunsPage( { message }) {
  const [guns, setGuns] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchGuns = async () => {
      try {
        const { data } = await axiosReq.get(`/guns`);
        setGuns(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
        setHasError(true);
        setHasLoaded(true);
      }
    };

    // Only fetch guns when a user is logged in
    if (currentUser) {
        setHasLoaded(false);
        const timer = setTimeout(() => {
          fetchGuns();
        }, 1000);
        return () => {
          clearTimeout(timer);
        }
      } else {  
        // If no user is logged in, set 'hasLoaded' and 'hasError' to true
        // which will cause re-render and display the not authorized error
        setHasLoaded(true);
        setHasError(true);
      }
    }, [pathname, currentUser]);

  return (
    <Row className="h-100">
      {/* maybe need to adjust this class to use the whole space */}
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p> no need for guns Popular profiles mobile</p>
        {hasLoaded ? (
          hasError ? (
            <Container className={appStyles.Content}>
              <p>
                You are not authorized to view this content.<br />
                Create an account and login first.
              </p>
            </Container>
          ) : (
            <>
              {guns.results.length ? (
                guns.results.map((gun) => {
                  return <Gun key={gun.id} {...gun} setGuns={setGuns} />;
                })
              ) : (
                <Container className={appStyles.Content}>
                  <Asset src={NoResults} message={message} />
                </Container>
              )}
            </>
          )
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>No need for guns Popular profiles for desktop</p>
      </Col>
    </Row>
  );
}

export default GunsPage;