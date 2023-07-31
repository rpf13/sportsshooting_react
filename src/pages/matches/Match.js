import React from 'react';
import styles from "../../styles/Match.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import FormatDate from '../../helper/FormatDate';

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
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner


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
      {title && <Card.Title className='text-center'>{title} - <FormatDate match_date={match_date} /></Card.Title>}
      {title && <Card.Text className='text-center'>{match_location}</Card.Text>}
      {title && <Card.Text className='text-center'>{level_filter}</Card.Text>}
    </Card.Body>
  </Card>
}

export default Match