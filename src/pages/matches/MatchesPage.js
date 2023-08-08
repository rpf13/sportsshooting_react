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
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../helper/utils";
import PopularMatches from "./PopularMatches";

function MatchesPage({ message, filter = "" }) {
    const [matches, setMatches] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    // used to refetch matches when url change between
    // Matches and MySchedule is detected
    const { pathname } = useLocation();

    // used for search query
    const [query, setQuery] = useState("");

    useEffect(() => {
      const fetchMatches = async () => {
        try {
          // the filter comes from the filter prop we
          // have set in the routes on app.js
          // the search content comes from the query argument passed
          const { data } = await axiosReq.get(
            `/matches/?${filter}search=${query}`
          );
          setMatches(data);
          setHasLoaded(true);
        } catch (err) {
          console.log(err);
        }
      };
      setHasLoaded(false);
    // set timeout to fetchMatches, also for search, to not render
    // after each user key input
      const timer = setTimeout(() => {
        fetchMatches();
      }, 1000)
      return () => {
        clearTimeout(timer);
      }
      
    }, [filter, query, pathname]);
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularMatches mobile />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search matches by title, location, advertiser"
          />
        </Form>

        {hasLoaded ? (
          <>
            {matches.results.length ? (
              <InfiniteScroll
                children={
                    matches.results.map((match) => (
                        <Match key={match.id} {...match} setMatches={setMatches} />
                    ))
                }
                dataLength={matches.results.length}
                loader={<Asset spinner />}
                hasMore={!!matches.next}
                next={() => fetchMoreData(matches, setMatches)}
              />
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
        <PopularMatches />
      </Col>
    </Row>
  );
}

export default MatchesPage;