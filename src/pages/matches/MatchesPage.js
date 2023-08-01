import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/MatchesPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Match from "./Match";

import NoResults from "../../assets/no_results.png"
import Asset from "../../components/Asset";

function MatchesPage({ message, filter = "" }) {
    const [matches, setMatches] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    // used to refetch matches when url change between
    // Matches and MySchedule is detected
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                // the filter comes from the filter prop we 
                // have set in the routes on app.js
                const {data} = await axiosReq.get(`/matches/?${filter}`)
                setMatches(data)
                setHasLoaded(true)
            } catch (err) {
                console.log(err)
            }
        };
        setHasLoaded(false);
        fetchMatches();
    }, [filter, pathname]);
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>TO BE REUSED POP PROFILES MOBILE</p>
        {hasLoaded ? (
            <>
            {matches.results.length ? (
                matches.results.map(match => (
                    <Match key={match.id} {...match} setMatches={setMatches} />
                ))
            ) : (
                <Container className={appStyles.Content}>
                    <Asset src={NoResults} message={message} />
                </Container>
            )}
            </>
        ) : (
            <Container className={appStyles.Content}>
                <Asset spinner />

            </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>TO BE REUSED POP PROFILES DESKTOP</p>
      </Col>
    </Row>
  );
}

export default MatchesPage;