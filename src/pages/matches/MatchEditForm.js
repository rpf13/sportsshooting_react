import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import styles from "../../styles/MatchCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function MatchEditForm() {
  const [errors, setErrors] = useState({});

    // Helper function to format date to 'YYYY-MM-DD'
    const formatMatchDate = (date) => {
        const [day, month, year] = date.split(' ');
        const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        const monthNumber = monthNames.indexOf(month) + 1;
        return `${year}-${monthNumber.toString().padStart(2, '0')}-${day.padStart(2, '0')}`;
    };

  const [matchData, setMatchData] = useState({
    title: "",
    match_date: "",
    division: "",
    match_location: "",
    level_filter: "",
    details: "",
    image: "",
  });

  const { title, match_date, division, match_location, level_filter, details, image } =
    matchData;

  const imageInput = useRef(null)
  const history = useHistory()
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(`/matches/${id}/`)
            const {
                title,
                match_date,
                division, 
                match_location,
                level_filter,
                details,
                image,
                is_owner
            } = data;

            const formattedMatchDate = formatMatchDate(match_date); // transforming the date

            is_owner ? setMatchData({
                title,
                match_date: formattedMatchDate,
                division,
                match_location,
                level_filter,
                details,
                image
            }) : history.push('/')
        } catch (err) {
            console.log(err);
        }
    };
    handleMount();
  }, [history, id])

  const handleChange = (event) => {
    setMatchData({
      ...matchData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setMatchData({
        ...matchData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  // function to submit the image and form data and redirect to the
  // just submitted match event

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();

    formData.append('title', title)
    formData.append('match_date', match_date)
    formData.append('division', division)
    formData.append('match_location', match_location)
    formData.append('level_filter', level_filter)
    formData.append('details', details)

    if (imageInput?.current?.files[0]){
        formData.append('image', imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`matches/${id}/`, formData);
      history.push(`/matches/${id}`)
    } catch (err) {
      console.log(err)
      if (err.response?.status !== 401){
        setErrors(err.response?.data)
      }
    }
  }

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Match Date</Form.Label>
        <Form.Control
          type="date"
          name="match_date"
          value={match_date}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.match_date?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}      

      <Form.Group>
        <Form.Label>Division</Form.Label>
        <Form.Control
          type="text"
          name="division"
          value={division}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.division?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="match_location"
          value={match_location}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.match_location?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Level</Form.Label>
        <Form.Control
          as="select"
          name="level_filter"
          value={level_filter}
          onChange={handleChange}
        >
          <option>Level-1</option>
          <option>Level-2</option>
          <option>Level-3</option>
          <option>Level-4</option>
          <option>Level-5</option>
        </Form.Control>
      </Form.Group>
      {errors.level?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Details</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="details"
          value={details}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.details?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Bright}`}
        type="submit"
      >
        save
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Bright}`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default MatchEditForm;
