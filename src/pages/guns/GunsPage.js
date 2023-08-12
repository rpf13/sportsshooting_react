import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";

import Gun from "./Gun"
import appStyles from "../../App.module.css";
import styles from "../../styles/GunsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no_results.png"
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../helper/utils";
import PopularMatches from "../matches/PopularMatches";
import { useRedirect } from "../../hooks/useRedirect";


function GunsPage({ message }) {
  useRedirect('loggedOut')
  const [guns, setGuns] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();

  // used for search query
  const [query, setQuery] = useState("");
  const [gunType, setGunType] = useState("");

  useEffect(() => {
    const fetchGuns = async () => {
      try {
        const { data } = await axiosReq.get(`/guns?search=${query}&type=${gunType}`);
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
      };
    } else {
      // If no user is logged in, set 'hasLoaded' and 'hasError' to true
      // which will cause re-render and display the not authorized error
      setHasLoaded(true);
      setHasError(true);
      setGuns({ results: [] }); // clear the guns state
    }
  }, [pathname, query, currentUser, gunType]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularMatches mobile />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <FormControl
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search by brand, model, serialnumber"
          />

          <Form.Control
            as="select"
            placeholder="Choose GunType"
            value={gunType}
            onChange={(event) => setGunType(event.target.value)}
            className="mb-3"
          >
            <option value="">All Gun Types or Select</option>
            <option>Handgun</option>
            <option>Rifle</option>
          </Form.Control>
        </Form>
        {hasLoaded ? (
          hasError ? (
            <Container className={appStyles.Content}>
              <p>
                You are not authorized to view this content.
                <br />
                Create an account and login first.
              </p>
            </Container>
          ) : (
            <>
              {guns.results.length ? (
                <InfiniteScroll
                  children={guns.results.map((gun) => {
                    return <Gun key={gun.id} {...gun} setGuns={setGuns} />;
                  })}
                  dataLength={guns.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!guns.next}
                  next={() => fetchMoreData(guns, setGuns)}
                />
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
        <PopularMatches />
      </Col>
    </Row>
  );
}

export default GunsPage;