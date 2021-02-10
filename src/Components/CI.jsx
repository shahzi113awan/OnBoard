import React, { useState } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function CI() {
  const [CI, setCI] = React.useState({
    tpi_rcName: '',
    tpi_aaSolution: '',
    tpi_ntc: '',
    tpi_vtSector: '',
    tpi_date: '',
    tpi_brPartner: '',
    tpi_aBdmOwner: '',
    tpi_ccLocation: '',
    tpi_EEADocuments: '',
    tpi_TLoAR: '',

    mci_crAddress: '',
    mci_crNumber: '',
    mci_ctAddress: '',
    mci_vtSector: '',

    cci_cName: '',
    cci_skypeAddress: '',
    cci_mNumber: '',
    cci_lNumber: '',
    cci_otpMNumber: '',

    tci_crAddress: '',
    tci_crNumber: '',
    tci_ctAddress: '',
    tci_wUrl: '',

    cci_2_cName: '',
    cci_2_Position: '',
    cci_2_mNumber: '',
    cci_2_lNumber: '',
    cci_2_otpMNumber: '',
    cci_2_skypeAddress: '',
  })
  console.log(CI)
  function handleInput(evt) {
    setCI({
      ...CI,
      [evt.target.name]: evt.target.value,
    })
  }
  return (
    <div className='mt-4 mb-5'>
      <div>
        <h2>
          <span class='badge badge-success'>COMPANY INFORMATION </span>
        </h2>
      </div>
      <hr className='border-primary ' />
      <Form>
        <div className='border p-3 shadow'>
          <div>
            <h2>
              <span class='badge badge-success'>
                Trading / Processing Information:
              </span>
            </h2>
          </div>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for='certificate'>Registered Company Name: </Label>
                <select
                  class='custom-select'
                  id='1'
                  name='tpi_rcName'
                  onChange={handleInput}
                >
                  <option value='Pending'>Pending</option>
                  <option value='Received'>Received</option>
                  <option value='Approved'>Approved</option>
                </select>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='memo'>Allocated Acquirer / Solution:</Label>
                <select
                  class='custom-select'
                  id='1'
                  name='tpi_aaSolution'
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
                <Label for='NTC'>Trading / New To Cards (NTC):</Label>

                <Input
                  onChange={handleInput}
                  required={false}
                  type='text'
                  name='tpi_ntc'
                  id='Name'
                  placeholder='NTC'
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='shareRegister'>Vertical / Trading Sector: :</Label>
                <select
                  class='custom-select'
                  id='1'
                  name='tpi_vtSector'
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
                <Label for='shareCertificate'>Application Boarded Date:</Label>
                <Input
                  onChange={handleInput}
                  type='date'
                  name='tpi_date'
                  id='date'
                  // placeholder="Company URL"
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='CCR'>Business / Referral Partner:</Label>
                <select
                  class='custom-select'
                  id='1'
                  name='tpi_brPartner'
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
                <Label for='CCR'>Assigned - BDM / Owner:</Label>
                <select
                  class='custom-select'
                  id='1'
                  name='tpi_aBdmOwner'
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
                <Label for='CCR'>Compliance Country Location:</Label>
                <select
                  class='custom-select'
                  id='1'
                  name='tpi_ccLocation'
                  onChange={handleInput}
                >
                  <option value='Pending'> Pending </option>
                  <option value='Received'>Received</option>
                  <option value='Approved'>Approved</option>
                </select>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='CCR'>EEA Documents:</Label>
                <select
                  class='custom-select'
                  id='1'
                  name='tpi_EEADocuments'
                  onChange={handleInput}
                >
                  <option value='Pending'> Pending </option>
                  <option value='Received'>Received</option>
                  <option value='Approved'>Approved</option>
                </select>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='CCR'>Trading License or Agreements Required:</Label>
                <select
                  class='custom-select'
                  id='1'
                  name='tpi_TLoAR'
                  onChange={handleInput}
                >
                  <option value='Pending'> Pending </option>
                  <option value='Received'>Received</option>
                  <option value='Approved'>Approved</option>
                </select>
              </FormGroup>
            </Col>
          </Row>
        </div>
        {/* **************************** */}
        <hr className='border-primary' />
        <div className='border p-3 shadow'>
          <div>
            <h2>
              <span class='badge badge-success'>
                Management Company Information:
              </span>
            </h2>
          </div>

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for='mci_crAddress'>Company Registered Address:</Label>
                <Input
                  name='mci_crAddress'
                  onChange={handleInput}
                  required={false}
                  type='address'
                  id='address'
                  placeholder='Company Registered Address'
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>Company Registered Number: </Label>
                <Input
                  name='mci_crNumber'
                  onChange={handleInput}
                  required={false}
                  type='number'
                  id='regnumber'
                  placeholder='Registeration Number'
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>
                  Company Trading Address (If Applicable):
                </Label>
                <Input
                  name='mci_ctAddress'
                  onChange={handleInput}
                  required={false}
                  type='address'
                  id='address'
                  placeholder='Company Trading Address :'
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>Vertical / Trading Sector: </Label>
                <Input
                  name='mci_vtSector'
                  onChange={handleInput}
                  required={false}
                  type='address'
                  id='address'
                  placeholder='Company Trading Address :'
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          {/* **************************** */}
          {/* <hr className="border-primary"/> */}
          <div>
            <h2>
              <span class='badge badge-success'>
                Company Contact Information:
              </span>
            </h2>
          </div>

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>Contact Name:</Label>
                <Input
                  name='cci_cName'
                  onChange={handleInput}
                  required={false}
                  type='Text'
                  id='Contact-name'
                  placeholder='Contact name'
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>Skype Address:</Label>
                <Input
                  name='cci_skypeAddress'
                  onChange={handleInput}
                  required={false}
                  type='text'
                  id='skypeAddress'
                  placeholder='Skype Address:											
                                '
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>Mobile Number: </Label>
                <Input
                  name='cci_mNumber'
                  onChange={handleInput}
                  required={false}
                  type='phone'
                  id='mobile'
                  placeholder='Mobile Number:'
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>Landline Number: </Label>
                <Input
                  name='cci_lNumber'
                  onChange={handleInput}
                  required={false}
                  type='phone'
                  id='landlinemobile'
                  placeholder='Landline Number:  '
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>OTP Mobile Number (IBAN Only): </Label>
                <Input
                  name='cci_otpMNumber'
                  onChange={handleInput}
                  required={false}
                  type='otpmobile'
                  id='address'
                  placeholder='OTP Mobile Number (IBAN Only)'
                ></Input>
              </FormGroup>
            </Col>
          </Row>
        </div>

        {/* =========================================== */}

        {/* **************************** */}
        <hr className='border-primary' />
        <div className='border p-3 shadow'>
          <div>
            <h2>
              <span class='badge badge-success'>
                Trading Company Information:
              </span>
            </h2>
          </div>

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>Company Registered Address:</Label>
                <Input
                  name='tci_crAddress'
                  onChange={handleInput}
                  required={false}
                  type='address'
                  id='address'
                  placeholder='address'
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>Company Registered Number: </Label>
                <Input
                  name='tci_crNumber'
                  onChange={handleInput}
                  required={false}
                  type='number'
                  id='regnumber'
                  placeholder='Registeration Number'
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>
                  Company Trading Address (If Applicable):
                </Label>
                <Input
                  name='tci_ctAddress'
                  onChange={handleInput}
                  required={false}
                  type='address'
                  id='address'
                  placeholder='Company Trading Address :'
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>Website: </Label>
                <Input
                  name='tci_wUrl'
                  onChange={handleInput}
                  required={false}
                  type='url'
                  id='Website url'
                  placeholder='Website url :'
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          {/* **************************** */}
          {/* <hr className="border-primary"/> */}
          <div>
            <h2>
              <span class='badge badge-success'>
                Company Contact Information:{' '}
              </span>
            </h2>
          </div>

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>Contact Name:</Label>
                <Input
                  name='cci_2_cName'
                  onChange={handleInput}
                  required={false}
                  type='Text'
                  id='Contact-name'
                  placeholder='Contact name'
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>Position:</Label>
                <Input
                  name='cci_2_Position'
                  onChange={handleInput}
                  required={false}
                  type='text'
                  id='position'
                  placeholder='Position:											
                                '
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>Mobile Number: </Label>
                <Input
                  name='cci_2_mNumber'
                  onChange={handleInput}
                  required={false}
                  type='phone'
                  id='mobile'
                  placeholder='Mobile Number:'
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>Landline Number: </Label>
                <Input
                  name='cci_2_lNumber'
                  onChange={handleInput}
                  required={false}
                  type='phone'
                  id='landlinemobile'
                  placeholder='Landline Number:  '
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='address'>OTP Mobile Number (IBAN Only): </Label>
                <Input
                  name='cci_2_otpMNumber'
                  onChange={handleInput}
                  required={false}
                  type='otpmobile'
                  id='address'
                  placeholder='Company Trading Address :'
                ></Input>
              </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for='address'>Skype Address:</Label>
                <Input
                  name='cci_2_skypeAddress'
                  onChange={handleInput}
                  required={false}
                  type='text'
                  id='skypeAddress'
                  placeholder='Skype Address:	'
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Link to='/cti'>
            <Button>Next</Button>
          </Link>
        </div>
      </Form>
    </div>
  )
}
