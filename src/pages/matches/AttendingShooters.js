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
  const [isLoading, setIsLoading] = useState(true);

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
      } finally {
        setIsLoading(false); // Set loading to false when done, whether success or failure
      }
    };
    handleMount();
  }, [matchId, attendingsCount]);

  if (isLoading) return <Asset spinner />;

  return (
    <Container
      className={`p-3 ${popStyles.PopContent} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {attendings.length ? (
        <>
          <p className="text-center" ><strong>Attending Shooters:</strong></p>
          {mobile ? (
            <div className={`d-flex justify-content-center flex-wrap ${appStyles.scrollableContainerMob}`}>
              {attendings.map((attending) => (
                <Link to={`/profile/${attending.owner}`} key={attending.id}>
                  <Avatar src={attending.profile_image} />
                  <strong>{attending.owner}</strong>
                </Link>
              ))}
            </div>
          ) : (
            <div className={`d-flex flex-wrap justify-content-between ${appStyles.scrollableContainerDsk}`}>
            {attendings.map((attending) => (
              <div key={attending.id}>
              <Link to={`/profile/${attending.owner}`}>
                <Avatar src={attending.profile_image} />
                <strong className="ml-3 mr-2">{attending.owner}</strong>
              </Link>
              </div>
            ))}
            </div>
          )}
        </>
      ) : (
        <p>No Shooter is attending this match</p>
      )}
    </Container>
  );
};

export default AttendingShooters;
