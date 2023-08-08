import React, { useEffect, useState } from "react";
import popStyles from "../../styles/PopularMatches.module.css"
import { Container } from 'react-bootstrap';
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FormatDay from "../../helper/FormatDay";


const PopularMatches = ({ mobile }) => {
  const [matchData, setMatchData] = useState({
    popularMatches: { results: [] },
  });
  const { popularMatches } = matchData;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/matches/?ordering=-attendings_count"
        );
        setMatchData((prevState) => ({
          ...prevState,
          popularMatches: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, []);

  return (
    <Container
      className={`${popStyles.PopContent} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularMatches.results.length ? (
        <>
          <p>Most popular Matches:</p>
          {mobile ? (
            <div>
              {popularMatches.results.slice(0, 3).map((match) => (
                <p key={match.id}>
                  <Link to={`/matches/${match.id}`}>
                    <strong>{match.title}</strong> - <FormatDay match_date={match.match_date} />
                  </Link>
                </p>
              ))}
            </div>
          ) : (
            popularMatches.results.slice(0, 5).map((match) => (
              <p key={match.id}>
                <Link to={`/matches/${match.id}`}>
                    <strong>{match.title}</strong> - <FormatDay match_date={match.match_date} />
                  </Link>
              </p>
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularMatches;