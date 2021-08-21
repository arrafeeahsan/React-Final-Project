import React from 'react'
import { Table } from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavbarD from './NavbarD';

const ClientList = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/client-list')
            .then(response => {
                setData(response.data);
                console.log(response.data)
            });
    }, [])

    return (
        <div>
             <NavbarD />
             <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Table>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(row => {
                                        return (
                                            <tr key={row.id}>
                                                <td>
                                                    {row.id}
                                                </td>
                                                <td>
                                                    {row.client_name}
                                                </td>
                                                <td>
                                                    {row.client_username}
                                                </td>
                                                <td>
                                                    {row.client_email}
                                                </td>                                           
                                                <td>
                                                    <Link to={`client-info/${row.id}`} className="btn btn-warning">Details</Link> 
                                                    <Link to={`client/update/${row.id}`} className="btn btn-success btn sm">Edit</Link> 
                                                    <Link to={`client/delete/${row.id}`} className="btn btn-danger btn sm">Delete</Link>
                                                    {/* <button type="button"  className='btn btn-danger btn-sm'>Delete</button> */}
                                                </td>
                                            </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                        </Table>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default ClientList
