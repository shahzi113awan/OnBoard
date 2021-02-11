import React, { useState } from 'react'
import { Col, Row, Form, FormGroup, Label, Button, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function CTI() {
  const [KYB, setKYB] = useState({
    kyb_coi: 'Pending',
    kyb_moa: 'Pending',
    kyb_aoa: 'Pending',
    kyb_sRegister: 'Pending',
    kyb_scs: 'Pending',
    kyb_ccre: 'Pending',
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
          <span class='badge badge-success'>Know Your Business (KYB):</span>
        </h2>
      </div>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for='certificate'>Certificate of Incorporation:</Label>
              <select
                className={
                  KYB.kyb_coi == 'Pending'
                    ? 'border-red custom-select'
                    : 'custom-select'
                }
                value={KYB.kyb_coi}
                id='1'
                name='kyb_coi'
                onChange={handleInput}
              >
                <option  value='Pending'>
                  Pending
                </option>
                <option value='Received'>Received</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='memo'>Memorandum of Association:</Label>
              <select
                className={
                  KYB.kyb_moa == 'Pending'
                    ? 'border-red custom-select'
                    : 'custom-select'
                }
                value={KYB.kyb_moa}
                id='1'
                name='kyb_moa'
                onChange={handleInput}
              >
                <option  value='Pending'>
                  Pending
                </option>
                <option value='Received'>Received</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='articles'>Articles of Association:</Label>
              <select
              className={
                KYB.kyb_aoa == 'Pending'
                  ? 'border-red custom-select'
                  : 'custom-select'
              }
              value={KYB.kyb_aoa}
                id='1'
                name='kyb_aoa'
                onChange={handleInput}
              >
                <option  value='Pending'>
                  Pending
                </option>
                <option value='Received'>Received</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='shareRegister'>Share Register:</Label>
              <select
                className={
                  KYB.kyb_sRegister == 'Pending'
                    ? 'border-red custom-select'
                    : 'custom-select'
                }
                value={KYB.kyb_sRegister}
                id='1'
                name='kyb_sRegister'
                onChange={handleInput}
              >
                <option value='Pending'>
                  Pending
                </option>
                <option value='Received'>Received</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='shareCertificate'>
                Share Certificate(s) - Signed:
              </Label>
              <select
                className={
                  KYB.kyb_scs == 'Pending'
                    ? 'border-red custom-select'
                    : 'custom-select'
                }
                value={KYB.kyb_scs}
                id='1'
                name='kyb_scs'
                onChange={handleInput}
              >
                <option value='Pending'>
                  Pending
                </option>
                <option value='Received'>Received</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='CCR'>Current Commercial Register Extract:</Label>
              <select
               className={
                KYB.kyb_ccre == 'Pending'
                  ? 'border-red custom-select'
                  : 'custom-select'
              }
              value={KYB.kyb_ccre}
                id='1'
                name='kyb_ccre'
                onChange={handleInput}
              >
                <option  value='Pending'>
                  Pending
                </option>
                <option value='Received'>Received</option>
              </select>
            </FormGroup>
          </Col>
        </Row>
        <Link to='/supporting-doc-kyb'>
          <Button>Next</Button>
        </Link>
      </Form>
    </div>
  )
}
