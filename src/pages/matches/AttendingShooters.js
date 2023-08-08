import React, { useEffect, useState } from "react";
import appStyles from "../../styles/AttendingShooters.module.css";
import popStyles from "../../styles/PopularMatches.module.css";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";

const AttendingShooters = ({ matchId, mobile, attendingsCount }) => {
  const [attendeesData, setAttendeesData] = useState({ attendings: [] });
  const { attendings } = attendeesData;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/matches/${matchId}`);
        setAttendeesData((prevState) => ({
          ...prevState,
          attendings: data.attendings,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [matchId, attendingsCount]);

  if (attendings.length === 0) {
    return (
      <Container
        className={`${popStyles.PopContent} ${
          mobile && "d-lg-none text-center mb-3"
        }`}
      >
        <Asset spinner />
      </Container>
    );
  }

  return (
    <Container
      className={`${popStyles.PopContent} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      <p>
        <strong>Attending Shooters:</strong>
      </p>
      {mobile ? (
        <div className={appStyles.scrollableContainerMob}>
          {attendings.map((attending) => (
            <Link to={`/profile/${attending.owner}`} key={attending.id}>
              <Avatar src={attending.profile_image} />
              <strong>{attending.owner}</strong>
            </Link>
          ))}
        </div>
      ) : (
        <div className={appStyles.scrollableContainerDsk}>
          {attendings.map((attending) => (
            <Link to={`/profile/${attending.owner}`} key={attending.id}>
              <Avatar src={attending.profile_image} />
              <strong>{attending.owner}</strong>
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
};

export default AttendingShooters;
