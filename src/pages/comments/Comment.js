import React from 'react'
import styles from '../../styles/Comment.module.css'
import { Media } from 'react-bootstrap'
import Avatar from '../../components/Avatar'
import { Link } from "react-router-dom";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { MoreDropdown } from '../../components/MoreDropdown';
import { axiosRes } from '../../api/axiosDefaults';

const Comment = (props) => {
    const {
        profile_id,
        profile_image,
        owner,
        updated_at,
        content,
        id,
        setMatch,
        setComments,
    } = props

    const currentUser = useCurrentUser();
    // check if currentUser is the owner of the comment
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`)
            setMatch((prevMatch) => ({
                results: [
                    {
                    ...prevMatch.results[0],
                    comments_count: prevMatch.results[0].comments_count -1,
                },
            ],
            }));

            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.filter((comment) => comment.id !== id),
            }));
        } catch (err) {
            console.log(err)
        }
    }


  return (
    <div>
        <hr />
        <Media>
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} />
            </Link>
            <Media.Body className='allign-self-center ml-2'>
                <Link to={`/profiles/${profile_id}`}>
                    <span className={styles.Owner}>{owner}</span>
                </Link>
                <span className={styles.Date}>{updated_at}</span>
                <p>{content}</p>
            </Media.Body>
            {is_owner && (
                <MoreDropdown handleEdit={() => {}} handleDelete={handleDelete} />
            )}
        </Media>

    </div>
  )
}

export default Comment