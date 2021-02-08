import React, { useState, useEffect, useMemo } from "react";
import { Col, Row, Form, FormGroup, Label, Input , Button } from "reactstrap";
import moment from "moment";
import countryList from "react-select-country-list";
import Select from "react-select";
import { connect } from "react-redux";
import { completed, pending } from "../actions/completedAction";
const KYC = ({ Done, completed, pending }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [ExpiryDate, setExpiryDate] = useState();
  const [remainig, setremainig] = useState(0);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [color, setColor] = useState("none");

  const changeHandler = (value) => {
    console.log(value);
    setValue(value);
  };
  const onChangeStartDAte = (e) => {
    setStartDate(e.target.value);
  };
  const onChangeExpiryDAte = (e) => {
    setExpiryDate(e.target.value);
  };
  //CalculateDays
  useEffect(() => {
    if (startDate && ExpiryDate) {
      const Start = moment(new Date()).format("MM/DD/YYYY");

      console.log(Start);
      const End = moment(ExpiryDate);
      console.log(ExpiryDate);
      const days = moment.duration(End.diff(Start)).asDays();

      setremainig(days);
      if (days > 90) setColor("#ADFF2F");
      else if (days < 90 && days > 45) setColor("#FFBF00");
      else setColor("	#FA8072");
      return days;
    }
  }, [ExpiryDate]);
  //End
  const fun = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <div>
        <h2>
          <span class="badge badge-success">KNOW YOUR CUSTOMER (KYC)</span>
        </h2>
      </div>
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
                style={{ backgroundColor: color }}
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
              <Label for="Notaized">Notarized</Label>
              <Input
                type="select"
                options={("yes", "no")}
                placeholder=" Nationality"
              >
                <option value="0">No</option>
                <option value="1">yes</option>
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
                type="select"
                onChange={(e) => {
                  fun(e);
                }}
              >
                <option value="0">Utility Bill</option>
                <option value="1">Others</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="PAd">Power Of Attorney Document:</Label>
              <Input
                type="select"
                onChange={(e) => {
                  fun(e);
                }}
              >
                <option value="0">Pending</option>
                <option value="1">Completed</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Done: state.completedReducer.complete,
});
export default connect(mapStateToProps, {
  completed,
  pending,
})(KYC);
