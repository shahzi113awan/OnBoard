import React from 'react'

export default function MainDashboard() {
    return (
        <div>
            <div class="table-responsive mt-5">
                <table class="table">
                    <caption>List of users</caption>
                    <thead>
                        <tr style={{ height: 100 }}>
                            <th scope="col"><p style={{ transformList: 'rotate(-90)' }}>Application count and Reffernce</p></th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col text-vertical" >
                                <p >Handle </p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
