import React, { useEffect, useState } from "react";
import appStyles from "../../App.module.css";
import { Container } from 'react-bootstrap';
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";


const PopularMatches = () => {
    const [matchData, setMatchData] = useState({
        popularMatches: { results: [] },
    });
    const { popularMatches } = matchData;

    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get("/matches/?ordering=-attendings_count");
                setMatchData(prevState => ({
                    ...prevState,
                    popularMatches: data,
                }))
            } catch (err) {
                console.log(err)
            }
        };
        handleMount()
    }, []);


  return (
    <Container className={appStyles.Content}>
        {popularMatches.results.length ? (
            <>
                <p>Most popular Matches.</p>
                {popularMatches.results.map(match => (
                <p key={match.id}>{match.title} - {match.match_date}</p>
                ))}
            </>
        ) : (
            <Asset spinner />
        )}
    </Container>
  );
};

export default PopularMatches