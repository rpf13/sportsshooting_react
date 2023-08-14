import React, { useContext, useEffect, useState } from "react";
import appStyles from "../../styles/AttendingShooters.module.css";
import popStyles from "../../styles/PopularMatches.module.css";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";
import { ErrorContext } from "../../App";

const AttendingShooters = ({ matchId, mobile, attendingsCount }) => {
  const [attendeesData, setAttendeesData] = useState({ attendings: [] });
  const { attendings } = attendeesData;
  const [isLoading, setIsLoading] = useState(true);
  const handleError = useContext(ErrorContext);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/matches/${matchId}`);
        setAttendeesData((prevState) => ({
          ...prevState,
          attendings: data.attendings,
        }));
      } catch {
        handleError();
      } finally {
        setIsLoading(false); // Set loading to false when done, whether success or failure
      }
    };
    handleMount();
  }, [matchId, attendingsCount, handleError]);

  if (isLoading) return <Asset spinner />;

  return (
    <Container
      className={`p-3 ${popStyles.PopContent} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {attendings.length ? (
        <>
          <h5 className="text-center p-3">Participating Shooters</h5>
          {mobile ? (
            <div
              className={`d-flex justify-content-center flex-wrap ${appStyles.scrollableContainerMob}`}
            >
              {attendings.map((attending) => (
                <Link
                  to={`/profiles/${attending.profile_id}`}
                  key={attending.id}
                >
                  <Avatar src={attending.profile_image} />
                  <strong>{attending.owner}</strong>
                </Link>
              ))}
            </div>
          ) : (
            <div
              className={`d-flex flex-wrap justify-content-between ${appStyles.scrollableContainerDsk}`}
            >
              {attendings.map((attending) => (
                <div key={attending.id}>
                  <Link to={`/profiles/${attending.profile_id}`}>
                    <Avatar src={attending.profile_image} />
                    <strong className="ml-3 mr-2">{attending.owner}</strong>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <h5 className="text-center p-3">No Participating Shooters</h5>
      )}
    </Container>
  );
};

export default AttendingShooters;
