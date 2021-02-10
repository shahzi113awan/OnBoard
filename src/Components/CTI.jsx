import React, { useState } from 'react'
import { Col, Row, Form, FormGroup, Label, Button, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { completed, pending } from '../actions/completedAction'

const CTI = ({ Done, completed, pending }) => {
  const [CTI, setCTI] = React.useState({
    cti_fcaForm: '',
    cti_bInformation: '',
    cti_otAgreement: '',
    cti_hwUrl: '',
    cti_wCompliance: '',
    cti_wUrl_proofDomain: '',
    cti_osChart: '',
    cti_bPlan: '',
  })
  console.log(CTI)
  function handleInput(evt) {
    setCTI({
      ...CTI,
      [evt.target.name]: evt.target.value,
    })
  }

  return (
    <div>
      <div>
        <h2>
          <span class='badge badge-success'>COMPANY TRADING INFORMATION</span>
        </h2>
      </div>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for='certificate'>Fully Completed Application Form:</Label>
              <select
                class='custom-select'
                id='1'
                name='cti_fcaForm'
                onChange={handleInput}
              >
                <option selected value='Pending'>
                  Pending
                </option>
                <option value='Received'>Received</option>
                <option value='Approved'>Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='memo'>Bank Information (Welcome Letter):</Label>
              <select
                class='custom-select'
                id='1'
                name='cti_bInformation'
                onChange={handleInput}
              >
                <option selected value='Pending'>
                  Pending
                </option>
                <option value='Received'>Received</option>
                <option value='Approved'>Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='OTA'>Office Tenancy Agreement:</Label>

              <Input
                name='cti_otAgreement'
                onChange={handleInput}
                required={false}
                type='text'
                id='Name'
                placeholder='OTA'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='shareRegister'>Headline Website URL Address:</Label>
              <select
                class='custom-select'
                id='1'
                name='cti_hwUrl'
                onChange={handleInput}
              >
                <option selected value='Pending'>
                  Pending
                </option>
                <option value='Received'>Received</option>
                <option value='Approved'>Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='shareCertificate'>Website Compliance:</Label>
              <Input
                name='cti_wCompliance'
                onChange={handleInput}
                type='url'
                id='Url'
                placeholder='Company URL'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='CCR'>Website URL - Proof of Domain:</Label>
              <select
                class='custom-select'
                id='1'
                name='cti_wUrl_proofDomain'
                onChange={handleInput}
              >
                <option selected value='Pending'>
                  Pending
                </option>
                <option value='Received'>Received</option>
                <option value='Approved'>Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='CCR'>Ownership Structure Chart:</Label>
              <select
                class='custom-select'
                id='1'
                name='cti_osChart'
                onChange={handleInput}
              >
                <option selected value='Pending'>
                  Pending
                </option>
                <option value='Received'>Received</option>
                <option value='Approved'>Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='CCR'>Business Plan:</Label>
              <select
                class='custom-select'
                id='1'
                name='cti_bPlan'
                onChange={handleInput}
              >
                <option value='Pending'> Pending </option>
                <option value='Received'>Received</option>
                <option value='Approved'>Approved</option>
              </select>
            </FormGroup>
          </Col>
        </Row>
        <Link to='/kyc'>
          <Button>Next</Button>
        </Link>
      </Form>
    </div>
  )
}

export default CTI
