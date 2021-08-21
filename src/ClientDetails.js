import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Navbar from './Navbar';
import NavbarD from './NavbarD';


const ClientDetails = () => {
    const { id: cid } = useParams();

    const [client_name, setClientName] = useState("");
    const [client_username, setClientUsername] = useState("");
    const [client_email, setClientEmail] = useState("");

    const [msg, setMsg] = useState('');

     const history = useHistory();
    

    const handleUpdate = () => {
       const data = {
            client_name: client_name,
            client_username: client_username,
            client_email: client_email
       }

    //    //const res = axios.put(`http://127.0.0.1:8000/api/client-info/${cid}`, data);
    //     //     .then(response => {
    //     //         setMsg("updated ")
    //     //    }).catch((err) => {
    //     //         setMsg("error")
    //     //     })
    
    //         //history.push('/client-list')
    }

    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/api/client-info/${cid}`)
            .then(response => {
                console.log(response.data)
                setClientName(response.data.client_name)
                setClientUsername(response.data.client_username)
                setClientEmail(response.data.client_email)
           });

    }, [])

    return (
        <div>
            <NavbarD />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Form>
                            <br />
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Name
                                        </Label>
                                        <Input 
                                            type="text" 
                                            name="client_name" 
                                            id="exampleEmail" 
                                            placeholder="" 
                                            value={client_name}
                                            onChange={(e) => setClientName(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                                <br />
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Username
                                        </Label>
                                        <Input 
                                            type="text" 
                                            name="client_username" 
                                            id="exampleEmail" 
                                            placeholder=""
                                            value={client_username}
                                            onChange={(e) => setClientUsername(e.target.value)}  
                                        />
                                    </FormGroup>
                                </Col>
                                <br />
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Email
                                        </Label>
                                        <Input 
                                            type="email" 
                                            name="client_email" 
                                            id="exampleEmail" 
                                            placeholder="" 
                                            value={client_email}
                                            onChange={(e) => setClientEmail(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                               
                            </Row>
                            <br />
                            <Col md={6}>
                                    <FormGroup>
                                       
                                    </FormGroup>
                                </Col>
                            
                            <Link to="/client-list" className="btn btn-primary">Back</Link>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientDetails
