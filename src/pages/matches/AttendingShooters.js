import React, { useEffect, useState } from "react";
import appStyles from "../../App.module.css";
import popStyles from "../../styles/PopularMatches.module.css"
import { Container } from 'react-bootstrap';
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
    
      return (
        <Container
          className={`${popStyles.PopContent} ${
            mobile && "d-lg-none text-center mb-3"
          }`}
        >
          {attendings.length ? (
            <>
              <p>Attending Shooters:</p>
              {mobile ? (
                <div>
                  {attendings.map((attending) => (
                    <p key={attending.id}>
                        {attending.owner}                   
                    </p>
                  ))}
                </div>
              ) : (
                attendings.map((attending) => (
                    <p key={attending.id}>
                        {attending.owner}                   
                    </p>
                ))
              )}
            </>
          ) : attendings.length === 0 ? (
            <p>No Shooter is attending this match</p>
          ) : (
            <Asset spinner />
          )}
        </Container>
      );
    };

export default AttendingShooters