import React, { useState, useEffect, useMemo } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import moment from "moment";
import countryList from "react-select-country-list";
import Select from "react-select";

const KYC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [ExpiryDate, setExpiryDate] = useState(new Date());
  const [remainig, setremainig] = useState(0);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  const onChangeStartDAte = (e) => {
    setStartDate(e.target.value);
  };
  const onChangeExpiryDAte = (e) => {
    setExpiryDate(e.target.value);
  };
  useEffect(() => {
    if (startDate && ExpiryDate) {
      const Start = moment(startDate);
      // console.log(Start);
      const End = moment(ExpiryDate);
      const days = moment.duration(End.diff(Start)).asDays();
      console.log(days);
      setremainig(days);
      return days;
    }
  }, [ExpiryDate, startDate]);

  console.log(remainig);
  return (
    <div>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Name">Name</Label>
              <Input
                type="text"
                name="name"
                id="Name"
                placeholder="Share Holder Name"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="shareHolds">Share Holds</Label>
              <Input
                type="number"
                name="shareHolds"
                id="shareHolds"
                placeholder="Share Holds Percent"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="passportID">Passport / ID</Label>
              <Input
                type="number"
                name="passportID"
                id="passportID"
                placeholder=" Passport or ID"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="ExpiryDate">Start Date</Label>
              <Input
                onChange={(e) => {
                  onChangeStartDAte(e);
                }}
                type="date"
                name="startDate"
                id="startDate"
                placeholder=" Passport or ID"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="ExpiryDate">Expiry Date</Label>
              <Input
                onChange={(e) => {
                  onChangeExpiryDAte(e);
                }}
                type="date"
                name="ExpiryDate"
                id="ExpiryDate"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="remainingDays">Remaining Days</Label>
              <Input
                style={{ backgroundColor: "red" }}
                type="text"
                disabled={true}
                value={remainig}
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Nationality">Country/Nationality</Label>
              <Select
                options={options}
                value={value}
                onChange={changeHandler}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="ExpiryDate">Notarized</Label>
              <Input
                type="select"
                options={("yes", "no")}
                placeholder=" Nationality"
              >
                <option>No</option>
                <option>yes</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Address">Address</Label>
              <Input
                type="text"
                name="address2"
                id="Address"
                placeholder="Address"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="typeOfProof">Type of Proof</Label>
              <Input
                type="text"
                name="typeOfProof"
                id="typeOfProof"
                placeholder=" Type of Proof"
              ></Input>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default KYC;
