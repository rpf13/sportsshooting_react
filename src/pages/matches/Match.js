import React from 'react';
import styles from "../../styles/Match.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import FormatDay from '../../helper/FormatDay';

const Match = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        attendings_count,
        attending_id,
        title,
        match_date,
        division,
        level_filter,
        match_location,
        image,
        details,
        updated_at,
        matchPage,
        setMatches,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner

    // function to handle the attending logic
    const handleAttend = async () => {
      try {
        const {data} = await axiosRes.post("/attendings/", { match: id });
        setMatches((prevMatches) => ({
          ...prevMatches,
          results: prevMatches.results.map((match) => {
            return match.id === id
            ? {...match, attendings_count: match.attendings_count + 1, attending_id: data.id}
            : match;
          })
        }))
      } catch (err) {
        console.log(err)
      }
    };

    // function to handle the unattend logic
    const handleUnattend = async () => {
      try {
        await axiosRes.delete(`/attendings/${attending_id}`);
        setMatches((prevMatches) => ({
          ...prevMatches,
          results: prevMatches.results.map((match) => {
            return match.id === id
            ? {...match, attendings_count: match.attendings_count -1, attending_id: null}
            : match;
          }),
        }));
      } catch (err) {
        console.log(err);
      }
    };


  return <Card className={styles.Match}>
    <Card.Body>
      <Media className='align-items-center justify-content-between'>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} height={55} />
          {owner}
        </Link>
        <div className='d-flex align-items-center'>
          <span>{updated_at}</span>
          {/* if user created match, is owner, we display edit option */}
          {is_owner && matchPage && "..."}
        </div>
      </Media>
    </Card.Body>
    <Link to={`/matches/${id}`}>
      <Card.Img src={image} alt='{title}' />
    </Link>
    <Card.Body>
      {/* check if title, details, ... props have been passed and only then style them  */}
      {title && <Card.Title className='text-center'>{title} - <FormatDay match_date={match_date} /></Card.Title>}
      {title && <Card.Text className='text-center'>{match_location}</Card.Text>}
      {title && <Card.Text className='text-center'>{level_filter}</Card.Text>}
      {title && <Card.Text className='text-center'>{division}</Card.Text>}
      {title && <Card.Text className='text-center'>{details}</Card.Text>}
      <div className={styles.MatchBar}>
        {/* logged in user incl. owner must be able to attend a match */}
        {attending_id ? (
          <span onClick={handleUnattend}>
            <i className={`fa-regular fa-calendar-check ${styles.Attend}`} />
          </span>
        ) : currentUser ? (
          <span onClick={handleAttend}>
            <i className={`fa-regular fa-calendar-check ${styles.AttendOutline}`} />
          </span>
        ) : (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Log in to attend a Match!</Tooltip>}
          >
            <i className={`fa-regular fa-calendar-check ${styles.AttendUnauth}`} />
          </OverlayTrigger>
        )}
        {attendings_count}
        <Link to={`/matches/${id}`}>
          <i className="fa-regular fa-comments" />
        </Link>
        {comments_count}
      </div>
    </Card.Body>
  </Card>
}

export default Match