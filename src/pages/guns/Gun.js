import React from 'react'
import styles from "../../styles/Gun.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import { MoreDropdown } from '../../components/MoreDropdown';
import { axiosRes } from '../../api/axiosDefaults';
import FormatDay from '../../helper/FormatDay';

const Gun = (props) => {
    const {
        id,
        owner,
        brand,
        gun_model,
        serial_number,
        details,
        type,
        image,
        created_at,
        updated_at,
        gunPage,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner
    const history = useHistory();

    const handleEdit = () => {
      history.push(`/guns/${id}/edit`);
    };
    
    const handleDelete = async () => {
        try {
          await axiosRes.delete(`/guns/${id}/`);
          history.goBack();
        } catch (err) {
          console.log(err);
        }
      };

  return (
    <Card className={styles.Gun}>
        <Card.Body>
            <Media className='align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                    {brand && <span>added - <FormatDay created_at={created_at} /></span>}
                </div>                
                <div className='d-flex align-items-center'>
                    {brand && <span>last updated - <FormatDay updated_at={updated_at} /></span>}
                    {/* if user created gun item, is owner, and the gunPage prop exists
                     we display edit option */}
                    {is_owner && gunPage && (
                        <MoreDropdown 
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    )}                    
                </div>
            </Media>
        </Card.Body>
        <Link to={`/guns/${id}`}>
            <Card.Img src={image} alt={gun_model} />
        </Link>
        <Card.Body>
            {brand && <Card.Title className='text-center'>{brand} - {gun_model}</Card.Title>}
            {brand && <Card.Text className='text-center'>{type}</Card.Text>}
            {brand && <Card.Text className='text-center'>{serial_number}</Card.Text>}
            {brand && <Card.Text className='text-center'>{details}</Card.Text>}
        </Card.Body>
    </Card>
  )
}

export default Gun
