import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

export default function CI() {
  return (
    <div className="mt-4 mb-5">
      <div>
        <h2>
          <span class="badge badge-success">COMPANY INFORMATION </span>
        </h2>
      </div>
      <hr className="border-primary " />
      <Form>
        <div className="border p-3 shadow">
          <div>
            <h2>
              <span class="badge badge-success">
                Trading / Processing Information:{" "}
              </span>
            </h2>
          </div>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="certificate">Registered Company Name: </Label>
                <select class="custom-select" id="1">
                  <option selected value="0">
                    {" "}
                    Pending{" "}
                  </option>
                  <option value="1">Received</option>
                  <option value="2">Approved</option>
                </select>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="memo">Allocated Acquirer / Solution:</Label>
                <select class="custom-select" id="1">
                  <option selected value="0">
                    {" "}
                    Pending{" "}
                  </option>
                  <option value="1">Received</option>
                  <option value="2">Approved</option>
                </select>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="OTA">Trading / New To Cards (NTC):</Label>

                <Input
                  required={false}
                  type="text"
                  name="OTA"
                  id="Name"
                  placeholder="OTA"
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="shareRegister">Vertical / Trading Sector: :</Label>
                <select class="custom-select" id="1">
                  <option selected value="0">
                    {" "}
                    Pending{" "}
                  </option>
                  <option value="1">Received</option>
                  <option value="2">Approved</option>
                </select>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="shareCertificate">Application Boarded Date:</Label>
                <Input
                  type="date"
                  name="date"
                  id="date"
                  // placeholder="Company URL"
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="CCR">Business / Referral Partner:</Label>
                <select class="custom-select" id="1">
                  <option selected value="0">
                    {" "}
                    Pending{" "}
                  </option>
                  <option value="1">Received</option>
                  <option value="2">Approved</option>
                </select>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="CCR">Assigned - BDM / Owner:</Label>
                <select class="custom-select" id="1">
                  <option selected value="0">
                    {" "}
                    Pending{" "}
                  </option>
                  <option value="1">Received</option>
                  <option value="2">Approved</option>
                </select>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="CCR">Compliance Country Location:</Label>
                <select class="custom-select" id="1">
                  <option value="0"> Pending </option>
                  <option value="1">Received</option>
                  <option value="2">Approved</option>
                </select>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="CCR">EEA Documents:</Label>
                <select class="custom-select" id="1">
                  <option value="0"> Pending </option>
                  <option value="1">Received</option>
                  <option value="2">Approved</option>
                </select>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="CCR">Trading License or Agreements Required:</Label>
                <select class="custom-select" id="1">
                  <option value="0"> Pending </option>
                  <option value="1">Received</option>
                  <option value="2">Approved</option>
                </select>
              </FormGroup>
            </Col>
          </Row>
        </div>
        {/* **************************** */}
        <hr className="border-primary" />
        <div className="border p-3 shadow">
          <div>
            <h2>
              <span class="badge badge-success">
                Management Company Information:
              </span>
            </h2>
          </div>

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Company Registered Address:</Label>
                <Input
                  required={false}
                  type="address"
                  name="address"
                  id="address"
                  placeholder="address"
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Company Registered Number: </Label>
                <Input
                  required={false}
                  type="number"
                  name="regnumber"
                  id="regnumber"
                  placeholder="Registeration Number"
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">
                  Company Trading Address (If Applicable):
                </Label>
                <Input
                  required={false}
                  type="address"
                  name="address"
                  id="address"
                  placeholder="Company Trading Address :"
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Vertical / Trading Sector: </Label>
                <Input
                  required={false}
                  type="address"
                  name="address"
                  id="address"
                  placeholder="Company Trading Address :"
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          {/* **************************** */}
          {/* <hr className="border-primary"/> */}
          <div>
            <h2>
              <span class="badge badge-success">
                Company Contact Information:{" "}
              </span>
            </h2>
          </div>

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Contact Name:</Label>
                <Input
                  required={false}
                  type="Text"
                  name="Contact-name"
                  id="Contact-name"
                  placeholder="Contact name"
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Skype Address:</Label>
                <Input
                  required={false}
                  type="text"
                  name="skypeAddress"
                  id="skypeAddress"
                  placeholder="Skype Address:											
                                "
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Mobile Number: </Label>
                <Input
                  required={false}
                  type="phone"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile Number:"
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Landline Number: </Label>
                <Input
                  required={false}
                  type="phone"
                  name="landlinemobile"
                  id="landlinemobile"
                  placeholder="Landline Number:  "
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">OTP Mobile Number (IBAN Only): </Label>
                <Input
                  required={false}
                  type="otpmobile"
                  name="address"
                  id="address"
                  placeholder="Company Trading Address :"
                ></Input>
              </FormGroup>
            </Col>
          </Row>
        </div>

        {/* =========================================== */}

        {/* **************************** */}
        <hr className="border-primary" />
        <div className="border p-3 shadow">
          <div>
            <h2>
              <span class="badge badge-success">
                Trading Company Information:
              </span>
            </h2>
          </div>

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Company Registered Address:</Label>
                <Input
                  required={false}
                  type="address"
                  name="address"
                  id="address"
                  placeholder="address"
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Company Registered Number: </Label>
                <Input
                  required={false}
                  type="number"
                  name="regnumber"
                  id="regnumber"
                  placeholder="Registeration Number"
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">
                  Company Trading Address (If Applicable):
                </Label>
                <Input
                  required={false}
                  type="address"
                  name="address"
                  id="address"
                  placeholder="Company Trading Address :"
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Website: </Label>
                <Input
                  required={false}
                  type="url"
                  name="Website url"
                  id="Website url"
                  placeholder="Website url :"
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          {/* **************************** */}
          {/* <hr className="border-primary"/> */}
          <div>
            <h2>
              <span class="badge badge-success">
                Company Contact Information:{" "}
              </span>
            </h2>
          </div>

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Contact Name:</Label>
                <Input
                  required={false}
                  type="Text"
                  name="Contact-name"
                  id="Contact-name"
                  placeholder="Contact name"
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Position:</Label>
                <Input
                  required={false}
                  type="text"
                  name="position"
                  id="position"
                  placeholder="Position:											
                                "
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Mobile Number: </Label>
                <Input
                  required={false}
                  type="phone"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile Number:"
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Landline Number: </Label>
                <Input
                  required={false}
                  type="phone"
                  name="landlinemobile"
                  id="landlinemobile"
                  placeholder="Landline Number:  "
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">OTP Mobile Number (IBAN Only): </Label>
                <Input
                  required={false}
                  type="otpmobile"
                  name="address"
                  id="address"
                  placeholder="Company Trading Address :"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="address">Skype Address:</Label>
                <Input
                  required={false}
                  type="text"
                  name="skypeAddress"
                  id="skypeAddress"
                  placeholder="Skype Address:											
                                "
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Link to="/cti">
            <Button>Next</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
