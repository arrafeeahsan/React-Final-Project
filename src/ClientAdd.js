import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import NavbarD from './NavbarD';

const ClientAdd = () => {

    const [client_name, setClientName] = useState("");
    const [client_username, setClientUsername] = useState("");
    const [client_email, setClientEmail] = useState("");
    const [client_password, setClientPassword] = useState("");
    const [account_nameR, setAccountRegular] = useState("");
    const [account_nameL, setAccountLoan] = useState("");

    const [msg, setMsg] = useState('');

    const history = useHistory();
    
    const handleUpdate = () => {
       const data = {
            client_name: client_name,
            client_username: client_username,
            client_email: client_email,
            client_password: client_password,
            account_nameR: account_nameR,
            account_nameL: account_nameL

       }

       const res = axios.put(`http://127.0.0.1:8000/api/client-add`, data);
        //     .then(response => {
        //         setMsg("updated ")
        //    }).catch((err) => {
        //         setMsg("error")
        //     })
    
        history.push('/client-list')
    }
    
     return (
        <div>
            <NavbarD/>
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
                                           onChange={(e) => setClientEmail(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                                <br />
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Password
                                        </Label>
                                        <Input 
                                            type="password" 
                                            name="client_password" 
                                            id="examplePassword" 
                                            placeholder="" 
                                           onChange={(e) => setClientPassword(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                                <br />
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Regular Account
                                        </Label>
                                        <Input 
                                            type="text" 
                                            name="account_nameR" 
                                            id="exampleEmail" 
                                            placeholder="" 
                                           onChange={(e) => setAccountRegular(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                                <br />
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Loan Account
                                        </Label>
                                        <Input 
                                            type="text" 
                                            name="account_nameL" 
                                            id="exampleEmail" 
                                            placeholder="" 
                                           onChange={(e) => setAccountLoan(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>

                               
                            </Row>
                            <br />
                            
                            <Button onClick={handleUpdate}>Create</Button>
                            <Link to="/client-list" className="btn btn-primary">Back</Link>
                            
                            
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientAdd
