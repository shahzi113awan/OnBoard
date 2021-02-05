import React from "react";
import { Col, Row,   Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { completed, pending } from "../actions/completedAction";

const CTI = ({ Done, completed, pending }) => {
  const onProofDomain = (e) => {
    const val = e.target.value;
    console.log(e.target.value);
    if (val === 1) {
      completed(e);
    } else if (val === 0) {
      pending(e);
    }
  };
  // pending();

  return (
    <div>
      <div>
        <h2>
          <span class="badge badge-success">COMPANY TRADING INFORMATION</span>
        </h2>
      </div>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="certificate">Fully Completed Application Form:</Label>
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
              <Label for="memo">Bank Information (Welcome Letter):</Label>
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
              <Label for="OTA">Office Tenancy Agreement:</Label>

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
              <Label for="shareRegister">Headline Website URL Address:</Label>
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
              <Label for="shareCertificate">Website Compliance:</Label>
              <Input
                type="url"
                name="OTA"
                id="Url"
                placeholder="Company URL"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Website URL - Proof of Domain:</Label>
              <select
                onChange={(e) => onProofDomain(e)}
                class="custom-select"
                id="1"
              >
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
              <Label for="CCR">Ownership Structure Chart:</Label>
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
              <Label for="CCR">Business Plan:</Label>
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
};
const mapStateToProps = (state) => ({
  Done: state.completedReducer.complete,
});
export default connect(mapStateToProps, {
  completed,
  pending,
})(CTI);
