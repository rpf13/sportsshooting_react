import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Upload from "../../assets/upload.png";

import styles from "../../styles/MatchCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function MatchCreateForm() {
  useRedirect('loggedOut')
  const [errors, setErrors] = useState({});

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
    formData.append('image', imageInput.current.files[0])

    try {
      const {data} = await axiosReq.post('/matches/', formData);
      history.push(`/matches/${data.id}`)
    } catch (err) {
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
        create
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
              {image ? (
                <>
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
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset src={Upload} message="Click to upload an image" />
                </Form.Label>
              )}

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

export default MatchCreateForm;
