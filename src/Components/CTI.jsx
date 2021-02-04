import React from 'react'


export default function CTI() {
    return (
        <div className='container'>
            <div>
                <h2><span class="badge badge-success">Company Trading Information:</span></h2>
            </div>
            <div>
                <form>
                    <div class="form-group row">
                        <div className='col-2'></div>
                        <label for="1" class="col-sm-6 col-md-4 col-form-label">Fully Completed Application Form:</label>
                        <div class="col-sm-6 col-md-4">
                            <select class="custom-select" id='1'>
                                <option selected value="0">Pending</option>
                                <option value="1">Received</option>
                                <option value="2">Approved</option>
                            </select>
                        </div>
                    </div>


                    <div class="form-group row">
                        <div className='col-2'></div>
                        <label for="2" class="col-sm-6 col-md-4 col-form-label">Bank Information (Welcome Letter):</label>
                        <div class="col-sm-6 col-md-4">
                            <select class="custom-select" id='2'>
                                <option selected value="0">Pending</option>
                                <option value="1">Received</option>
                                <option value="2">Approved</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div className='col-2'></div>
                        <label for="3" class="col-sm-6 col-md-4 col-form-label">Office Tenancy Agreement:</label>
                        <div class="col-sm-6 col-md-4">
                            <input type='url' className='form-control' id='3' />
                            {/* <select class="custom-select" id='1'>
                                <option selected value="0">Pending</option>
                                <option value="1">Received</option>
                                <option value="2">Approved</option>
                            </select> */}
                        </div>
                    </div>
                    <div class="form-group row">
                        <div className='col-2'></div>
                        <label for="4" class="col-sm-6 col-md-4 col-form-label">Headline Website URL Address:</label>
                        <div class="col-sm-6 col-md-4">
                            <select class="custom-select" id='4'>
                                <option selected value="0">Pending</option>
                                <option value="1">Received</option>
                                <option value="2">Approved</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div className='col-2'></div>
                        <label for="5" class="col-sm-6 col-md-4 col-form-label">Website Compliance:</label>
                        <div class="col-sm-6 col-md-4">
                            <select class="custom-select" id='5'>
                                <option selected value="0">Pending</option>
                                <option value="1">Received</option>
                                <option value="2">Approved</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div className='col-2'></div>
                        <label for="6" class="col-sm-6 col-md-4 col-form-label">Website URL - Proof of Domain:											</label>
                        <div class="col-sm-6 col-md-4">
                            <select class="custom-select" id='6'>
                                <option selected value="0">Pending</option>
                                <option value="1">Received</option>
                                <option value="2">Approved</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div className='col-2'></div>
                        <label for="7" class="col-sm-6 col-md-4 col-form-label">Ownership Structure Chart:											</label>
                        <div class="col-sm-6 col-md-4">
                            <select class="custom-select" id='7'>
                                <option selected value="0">Pending</option>
                                <option value="1">Received</option>
                                <option value="2">Approved</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div className='col-2'></div>
                        <label for="8" class="col-sm-6 col-md-4 col-form-label">Business Plan:											</label>
                        <div class="col-sm-6 col-md-4">
                            <select class="custom-select" id='8'>
                                <option selected value="0">Pending</option>
                                <option value="1">Received</option>
                                <option value="2">Approved</option>
                            </select>
                        </div>
                    </div>
                    

                </form>
            </div>
        </div>
    )
}
