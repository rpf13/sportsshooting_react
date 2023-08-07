import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Match from "./Match";

import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


function MatchPage() {
  const { id } = useParams();

  // set the default object we get from api to an array
  // independet of only 1 or multiple objects are returned
  // multiple objects are returned via an array called results
  const [match, setMatch] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    // in this API call, we can request multiple data endpoints
    const handleMount = async () => {
      try {
        const [{ data: match }] = await Promise.all([
          axiosReq.get(`/matches/${id}`),
        ]);
        setMatch({ results: [match] });
        console.log(match);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>TO BE DELETED</p>
        {/* import of the match component and all it's data from match.js */}
        <Match {...match.results[0]} setMatches={setMatch} matchPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              match={id}
              setMatch={setMatch}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Next Matches
      </Col>
    </Row>
  );
}

export default MatchPage;