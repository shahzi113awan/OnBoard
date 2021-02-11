import React, { useState } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function CTI() {
  const [KYB_SD, setKYB_SD] = useState({
    fsd_cbs: '',
    fsd_pbs: '',
    fsd_pow: '',
    fsd_cap: '',
    lta_gfl: '',
    lta_cra: '',
    lta_fdsa: '',
    lta_fbo_cr: '',
  })
  function handleInput(evt) {
    console.log(KYB_SD)
    setKYB_SD({
      ...KYB_SD,
      [evt.target.name]: evt.target.value,
    })
  }
  return (
    <div>
      <div>
        <h2>
          <span class='badge badge-success'>Supporting Documents (KYB):</span>
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
              <Label for='certificate'>Corporate Bank Statements:</Label>
              <select
                required={true}
                class='custom-select'
                id='1'
                name='fsd_cbs'
                onChange={handleInput}
              >
                <option value="Pending">Pending</option>
                <option value="Received">Received</option>
                <option value="Approved">Approved</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='memo'>Personal Bank Statements:</Label>
              <select
                class='custom-select'
                id='1'
                name='fsd_pbs'
                
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
              <Label for='articles'>Proof of Wealth:</Label>
              <select
                class='custom-select'
                id='1'
                name='fsd_pow'
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
              <Label for='shareRegister'>Company AML Policy:</Label>
              <select
                class='custom-select'
                id='1'
                name='fsd_cap'
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
          <Col md={10}>
            <FormGroup>
              <h4>
                <span>Licence & Trading Agreements</span>
              </h4>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='shareCertificate'>Gambling or Forex License:</Label>
              <select
                class='custom-select'
                id='1'
                name='lta_gfl'
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
              <Label for='CCR'>Copywrite or Re-seller Agreement:</Label>
              <select
                class='custom-select'
                id='1'
                name='lta_cra'
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
              <Label for='CCR'>Fulfilment or Drop Shipping Agreement:</Label>
              <select
                class='custom-select'
                id='1'
                name='lta_fdsa'
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
              <Label for='CCR'>
                FBO Company Registration (Nutra Merchants):
              </Label>
              <select
                class='custom-select'
                id='1'
                name='lta_fbo_cr'
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
        </Row>
        <Link to='/check-List'>
          <Button>Next</Button>
        </Link>
      </Form>
    </div>
  )
}
