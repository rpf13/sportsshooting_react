import React, { useContext, useEffect, useState } from "react";
import popStyles from "../../styles/PopularMatches.module.css";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FormatDay from "../../helper/FormatDay";
import { ErrorContext } from "../../App";

const PopularMatches = ({ mobile }) => {
  const [matchData, setMatchData] = useState({
    popularMatches: { results: [] },
  });
  const { popularMatches } = matchData;
  const handleError = useContext(ErrorContext);

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
      } catch {
        handleError();
      }
    };
    handleMount();
  }, [handleError]);

  return (
    <Container
      className={`${popStyles.PopContent} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularMatches.results.length ? (
        <>
          <h5 className="text-center p-3">Upcoming popular Matches</h5>
          {mobile ? (
            <div>
              {popularMatches.results
                // filter to display only matches in the future
                // sort them by most recent first and limit to 4
                .filter((input) => new Date(input.match_date) - new Date() > 0)
                .sort((a, b) => new Date(a.match_date) - new Date(b.match_date))
                .slice(0, 3)
                .map((match) => (
                  <p key={match.id}>
                    <Link to={`/matches/${match.id}`}>
                      <strong>{match.title}</strong> -{" "}
                      <FormatDay match_date={match.match_date} />
                    </Link>
                  </p>
                ))}
            </div>
          ) : (
            popularMatches.results
              // filter to display only matches in the future
              // sort them by most recent first and limit to 6
              .filter((input) => new Date(input.match_date) - new Date() > 0)
              .sort((a, b) => new Date(a.match_date) - new Date(b.match_date))
              .slice(0, 5)
              .map((match) => (
                <p key={match.id}>
                  <Link to={`/matches/${match.id}`}>
                    <strong>{match.title}</strong> -{" "}
                    <FormatDay match_date={match.match_date} />
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
