import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import NoResults from "../../assets/no_results.png"

import PopularMatches from "../matches/PopularMatches";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Match from "../matches/Match";
import { fetchMoreData } from "../../helper/utils";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profile, setProfile] = useState(null);
  const [profileMatches, setProfileMatches] = useState({ results: [] });
  const currentUser = useCurrentUser();
//   useParams is used to fetch the user id out of the URL
  const {id} = useParams();


  useEffect(() => {
    const fetchData = async () => {
        try {
            const [{data: pageProfile}, {data: matches }] = await Promise.all([
                axiosReq.get(`/profiles/${id}/`),
                axiosReq.get(`/matches/?owner__profile=${id}`),
            ]);
            setProfile(pageProfile);
            setProfileMatches(matches);
            setHasLoaded(true);
        } catch (err) {
            console.log(err)
        }
    }
     fetchData() ;
  }, [id]);

  const mainProfile = (
    <>
    {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image 
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
        />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <h5>{profile?.club}CLUB Placeholder</h5>
        </Col>
        <Col lg={3} className="text-lg-right">
        <p>Edit profile</p>
        </Col>
        <Col className="p-3">Profile content</Col>
      </Row>
    </>
  );

  const mainProfileMatches = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s matches</p>
      <hr />
      {profileMatches.results.length && profileMatches.results.length > 0 ? (
        <InfiniteScroll
          children={profileMatches.results.map((match) => (
            <Match key={match.id} {...match} setMatches={setProfileMatches} />
          ))}
          dataLength={profileMatches.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileMatches.next}
          next={() => fetchMoreData(profileMatches, setProfileMatches)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularMatches mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfileMatches}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularMatches />
      </Col>
    </Row>
  );
}

export default ProfilePage;