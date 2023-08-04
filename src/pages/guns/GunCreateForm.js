import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/addgun.png";

import styles from "../../styles/GunCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";

function GunCreateForm() {
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

      <Form.Group>
        <Form.Label>Gun Model</Form.Label>
        <Form.Control
          type="text"
          name="gun_model"
          value={gun_model}
          onChange={handleChange}
        />
      </Form.Group>

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

      <Form.Group>
        <Form.Label>Serial Number</Form.Label>
        <Form.Control
          type="text"
          name="serial_number"
          value={serial_number}
          onChange={handleChange}
        />
      </Form.Group>

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

      <Button
        className={`${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Bright}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form>
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
                      className={`${btnStyles.Button} ${btnStyles.Bright} btn`}
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
                  <Asset
                    src={Upload}
                    message="Click to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
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

export default GunCreateForm;