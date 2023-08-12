import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import styles from "../../styles/GunCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function GunEditForm() {
  const [errors, setErrors] = useState({});

  const [gunData, setGunData] = useState({
    brand: "",
    gun_model: "",
    type: "",
    serial_number: "",
    details: "",
    image: "",
  });
  const { brand, gun_model, type, serial_number, details, image } = gunData;

  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
        try {
           const {data} = await axiosReq.get(`/guns/${id}/`)
           const {
            brand,
            gun_model,
            type,
            serial_number,
            details,
            image,
            is_owner
        } = data;

        is_owner ? setGunData({
            brand,
            gun_model,
            type,
            serial_number,
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
    setGunData({
      ...gunData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setGunData({
        ...gunData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('brand', brand)
    formData.append('gun_model', gun_model)
    formData.append('type', type)
    formData.append('serial_number', serial_number)
    formData.append('details', details)

    if (imageInput?.current?.files[0]){
        formData.append('image', imageInput.current.files[0]);
    }
    

    try {
        await axiosReq.put(`/guns/${id}/`, formData);
        history.push(`/guns/${id}`)
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
        <Form.Label>Brand</Form.Label>
        <Form.Control
          type="text"
          name="brand"
          value={brand}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.brand?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Gun Model</Form.Label>
        <Form.Control
          type="text"
          name="gun_model"
          value={gun_model}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.gun_model?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}      

      <Form.Group>
        <Form.Label>Type</Form.Label>
        <Form.Control
          as="select"
          name="type"
          value={type}
          onChange={handleChange}
        >
          <option>Handgun</option>
          <option>Rifle</option>
        </Form.Control>
      </Form.Group>
      {errors.type?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}      

      <Form.Group>
        <Form.Label>Serial Number</Form.Label>
        <Form.Control
          type="text"
          name="serial_number"
          value={serial_number}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.serial_number?.map((message, idx) => (
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
      <Button className={`${btnStyles.Button} ${btnStyles.Bright}`} type="submit">
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
                      className={`${btnStyles.Button} ${btnStyles.Bright} btn`}
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

export default GunEditForm;