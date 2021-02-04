import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function CTI() {
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
              <Label for="memo">Memorandum of Association:</Label>
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
              <Label for="articles">Articles of Association:</Label>
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
              <Label for="shareRegister">Share Register:</Label>
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
              <Label for="shareCertificate">
                Share Certificate(s) - Signed:
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
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Current Commercial Register Extract:</Label>
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
      </Form>
    </div>
  );
}
