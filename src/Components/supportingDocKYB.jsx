import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";


export default function CTI() {
  return (
    <div>
      <div>
        <h2>
          <span class="badge badge-success">Supporting Documents (KYB):</span>
        </h2>
      </div>
      <Form>
        <Row form>
          <Col md={10}>
            <FormGroup>
              <h4>
                <span>Financial Support Documents:</span>
              </h4>
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="certificate">Corporate Bank Statements:</Label>
              <select required={true} class="custom-select" id="1">
                <option></option>
                <option>Pending</option>
                <option>Received</option>
                <option>Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="memo">Personal Bank Statements:</Label>
              <select class="custom-select" id="1">
                <option selected value="0">
                  Pending
                </option>
                <option value="1">Received</option>
                <option value="2">Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="articles">Proof of Wealth:</Label>
              <select class="custom-select" id="1">
                <option selected value="0">
                  Pending
                </option>
                <option value="1">Received</option>
                <option value="2">Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="shareRegister">Company AML Policy:</Label>
              <select class="custom-select" id="1">
                <option selected value="0">
                  Pending
                </option>
                <option value="1">Received</option>
                <option value="2">Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={10}>
            <FormGroup>
              <h4>
                <span>Licence & Trading Agreements</span>
              </h4>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="shareCertificate">Gambling or Forex License:</Label>
              <select class="custom-select" id="1">
                <option selected value="0">
                  Pending
                </option>
                <option value="1">Received</option>
                <option value="2">Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Copywrite or Re-seller Agreement:</Label>
              <select class="custom-select" id="1">
                <option>Pending</option>
                <option value="1">Received</option>
                <option value="2">Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Fulfilment or Drop Shipping Agreement:</Label>
              <select class="custom-select" id="1">
                <option selected value="0">
                  Pending
                </option>
                <option value="1">Received</option>
                <option value="2">Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Copywrite or Re-seller Agreement:</Label>
              <select class="custom-select" id="1">
                <option selected value="0">
                  Pending
                </option>
                <option value="1">Received</option>
                <option value="2">Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">
                FBO Company Registration (Nutra Merchants):
              </Label>
              <select class="custom-select" id="1">
                <option selected value="0">
                  Pending
                </option>
                <option value="1">Received</option>
                <option value="2">Approved</option>
              </select>
            </FormGroup>
          </Col>
        </Row>
        <Link to="/check-List">
          <Button>Next</Button>
        </Link>
      </Form>
    </div>
  );
}
