import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Gun from "./Gun";

function GunPage() {
  const { id } = useParams();
  const [gun, setGun] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
        try {
            const [{data: gun}] = await Promise.all([
                axiosReq.get(`/guns/${id}`)
            ])
            setGun({results: [gun]})
            console.log(gun)
        } catch (err) {
            console.log(err)
            
        }
    };

    handleMount();
  }, [id])


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {/* import of the Gun component and all it's data from gun.js 
        when calling Gun, we pass arguments as well as the GunPage prop
        */}
        <Gun {...gun.results[0]} setGuns={setGun} gunPage />
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Not needed no profiles to show on gun
      </Col>
    </Row>
  );
}

export default GunPage;