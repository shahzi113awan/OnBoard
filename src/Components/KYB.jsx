import React, {useState} from "react";
import { Col, Row, Form, FormGroup, Label, Button, Input } from "reactstrap";
import { Link } from "react-router-dom";

export default function CTI() {
  const [KYB, setKYB] = useState({
    kyb_coi:'',
    kyb_moa:'',
    kyb_aoa:'',
    kyb_sRegister:'',
    kyb_scs:'',
    kyb_ccre:'',
    



  })
  function handleInput(evt) {
    console.log(KYB)
    setKYB({
      ...KYB,
      [evt.target.name]: evt.target.value,
    })
  }
  return (
    <div>
      <div>
        <h2>
          <span class="badge badge-success">Know Your Business (KYB):</span>
        </h2>
      </div>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="certificate">Certificate of Incorporation:</Label>
              <select class="custom-select" id="1" name='kyb_coi'
                onChange={handleInput}>
                <option selected value="Pending">
                  Pending
                </option>
                <option value="Received">Received</option>
                <option value="Approved">Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="memo">Memorandum of Association:</Label>
              <select class="custom-select" id="1" name='kyb_moa'
                onChange={handleInput}>
                <option selected value="Pending">
                  Pending
                </option>
                <option value="Received">Received</option>
                <option value="Approved">Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="articles">Articles of Association:</Label>
              <select class="custom-select" id="1" name='kyb_aoa'
                onChange={handleInput}>
                <option selected value="Pending">
                  Pending
                </option>
                <option value="Received">Received</option>
                <option value="Approved">Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="shareRegister">Share Register:</Label>
              <select class="custom-select" id="1" name='kyb_sRegister'
                onChange={handleInput}>
                <option selected value="Pending">
                  Pending
                </option>
                <option value="Received">Received</option>
                <option value="Approved">Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="shareCertificate">
                Share Certificate(s) - Signed:
              </Label>
              <select class="custom-select" id="1" name='kyb_scs'
                onChange={handleInput}>
                <option selected value="Pending">
                  Pending
                </option>
                <option value="Received">Received</option>
                <option value="Approved">Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Current Commercial Register Extract:</Label>
              <select class="custom-select" id="1" name='kyb_ccre'
                onChange={handleInput}>
                <option selected value="Pending">
                  Pending
                </option>
                <option value="Received">Received</option>
                <option value="Approved">Approved</option>
              </select>
            </FormGroup>
          </Col>
        </Row>
        <Link to="/supporting-doc-kyb">
          <Button>Next</Button>
        </Link>
      </Form>
    </div>
  );
}
