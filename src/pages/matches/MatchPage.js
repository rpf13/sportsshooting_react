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
import Comment from "../comments/Comment";


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
        const [{ data: match }, {data: comments}] = await Promise.all([
          axiosReq.get(`/matches/${id}`),
          axiosReq.get(`/comments/?match=${id}`)
        ]);
        setMatch({ results: [match] });
        setComments(comments)
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
          {comments.results.length ? (
            comments.results.map(comment => (
              <Comment
                // props handed over when Comment is called
                key={comment.id} {...comment}
                setMatch={setMatch}
                setComments={setComments}
              />
            ))
          ) : currentUser ? (
            <>
            {/* empty fragment, since we don't want any text here */}
            </>
          ) : (
            <span className={appStyles.FontLight}>
              No comments yet. SignIn to create a comment.
            </span>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Next Matches
      </Col>
    </Row>
  );
}

export default MatchPage;