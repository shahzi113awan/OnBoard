import React, { useState, useEffect, useMemo } from 'react'
import { Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import moment from 'moment'
import countryList from 'react-select-country-list'
import Select from 'react-select'
import { connect } from 'react-redux'
import { completed, pending } from '../actions/completedAction'
const KYC = ({ Done, completed, pending }) => {
  const [KYC, setKYC] = React.useState({
    kyc_name: '',
    kyc_sHolds: '',
    kyc_pID: '',
    kyc_startDate: '',
    kyc_ExpiryDate: '',
    kyc_nationality: '',
    kyc_notarized: '',
    kyc_Address: '',
    kyc_toProof: '',
    kyc_paDocument: '',
  })
  function handleInput(evt) {
    console.log(KYC)
    setKYC({
      ...KYC,
      [evt.target.name]: evt.target.value,
    })
  }

  const [startDate, setStartDate] = useState()
  const [ExpiryDate, setExpiryDate] = useState()
  const [remainig, setremainig] = useState(0)
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])
  const [color, setColor] = useState('none')

  const changeHandler = (value) => {
    console.log(value)
    setValue(value)
  }
  const onChangeStartDAte = (e) => {
    setStartDate(e.target.value)
  }
  const onChangeExpiryDAte = (e) => {
    setExpiryDate(e.target.value)
  }
  //CalculateDays
  useEffect(() => {
    if (KYC.kyc_startDate && KYC.kyc_ExpiryDate) {
      const Start = moment(new Date()).format('MM/DD/YYYY')

      console.log(Start)
      const End = moment(KYC.kyc_ExpiryDate)
      console.log(KYC.kyc_ExpiryDate)
      const days = moment.duration(End.diff(Start)).asDays()

      setremainig(days)
      if (days > 90) setColor('#ADFF2F')
      else if (days < 90 && days > 45) setColor('#FFBF00')
      else setColor('	#FA8072')
      return days
    }
  }, [KYC.kyc_ExpiryDate])
  //End
  const fun = (e) => {
    console.log(e.target.value)
  }
  return (
    <div>
      <div>
        <h2>
          <span class='badge badge-success'>KNOW YOUR CUSTOMER (KYC)</span>
        </h2>
      </div>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for='Name'>Name</Label>
              <Input
                name='kyc_name'
                onChange={handleInput}
                type='text'
                id='Name'
                placeholder='Share Holder Name'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='shareHolds'>Share Holds</Label>
              <Input
                name='kyc_sHolds'
                onChange={handleInput}
                type='number'
                id='shareHolds'
                placeholder='Share Holds Percent'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for='passportID'>Passport / ID</Label>
              <Input
                name='kyc_pID'
                onChange={handleInput}
                type='number'
                id='passportID'
                placeholder=' Passport or ID'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for='ExpiryDate'>Start Date</Label>
              <Input
                name='kyc_startDate'
                onChange={handleInput}
                type='date'
                id='startDate'
                placeholder=' Passport or ID'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for='ExpiryDate'>Expiry Date</Label>
              <Input
                name='kyc_ExpiryDate'
                onChange={handleInput}
                type='date'
                id='ExpiryDate'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for='remainingDays'>Remaining Days</Label>
              <Input
                style={{ backgroundColor: color }}
                type='text'
                disabled={true}
                value={remainig}
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='Nationality'>Country/Nationality</Label>
              <Select
                options={options}
                value={value}
                name='kyc_nationality'
                onChange={handleInput}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='Notaized'>Notarized</Label>
              <Input
                name='kyc_notarized'
                onChange={handleInput}
                type='select'
                placeholder=' Nationality'
              >
                <option value='No'>No</option>
                <option value='yes'>yes</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='Address'>Address</Label>
              <Input
                name='kyc_Address'
                onChange={handleInput}
                type='text'
                id='Address'
                placeholder='Address'
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='typeOfProof'>Type of Proof</Label>
              <Input type='select' name='kyc_toProof' onChange={handleInput}>
                <option value='Utility Bill'>Utility Bill</option>
                <option value='Others'>Others</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='PAd'>Power Of Attorney Document:</Label>
              <Input name='kyc_paDocument' onChange={handleInput}>
                <option value='Pending'>Pending</option>
                <option value='Completed'>Completed</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Link to='/kyb'>
          <Button>Next</Button>
        </Link>
      </Form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  Done: state.completedReducer.complete,
})
export default connect(mapStateToProps, {
  completed,
  pending,
})(KYC)
