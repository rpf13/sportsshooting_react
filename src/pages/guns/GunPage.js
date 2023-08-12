import React, { useContext, useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Gun from "./Gun";
import { useRedirect } from "../../hooks/useRedirect";
import PopularMatches from "../matches/PopularMatches";
import { ErrorContext } from "../../App";

function GunPage() {
  useRedirect('loggedOut')
  const { id } = useParams();
  const [gun, setGun] = useState({ results: [] });
  const handleError = useContext(ErrorContext)

  useEffect(() => {
    const handleMount = async () => {
        try {
            const [{data: gun}] = await Promise.all([
                axiosReq.get(`/guns/${id}`)
            ])
            setGun({results: [gun]})
        } catch {
          handleError();
        }
    };

    handleMount();
  }, [id, handleError])


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularMatches mobile />
        {/* import of the Gun component and all it's data from gun.js 
        when calling Gun, we pass arguments as well as the GunPage prop
        */}
        <Gun {...gun.results[0]} setGuns={setGun} gunPage />
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularMatches />
      </Col>
    </Row>
  );
}

export default GunPage;