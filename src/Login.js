import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import NavbarD from './NavbarD';
import Navbar from './Navbar';

const Login = () => {

    const [username, setuser_name] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
           // history.push("/instructor-index");

        }

    }, [])

    async function validateLogin() {
       
        let data = { username, password };
        const res = axios.post("http://127.0.0.1:8000/api/login", data)
       // console.log(res.data.);
            .then(response => {
                console.log(res.data);
            //console.log(res.data.err);

           });
        localStorage.setItem('user-info', JSON.stringify(res));
        //alert('Success')
        history.push("/client-list");
    }

    return (

        <div>
            <Navbar />
        <div className="container">
            <div className="card-body ">

                <Form>
                    <h2>Please Login!</h2>
                    <FormGroup row>
                        <Label for="quiz_name" sm={2}>Username</Label>
                        <Col sm={7}>
                            <input type="text" name="username" id="user_name" placeholder="Enter user name" onChange={(e) => setuser_name(e.target.value)} />
                        </Col>
                        
                    </FormGroup>
                    <br/>
                    <FormGroup row>
                        <Label for="c_id" sm={2}>Password</Label>
                        <Col sm={7}>
                            <input type="password" name="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                        </Col>
                        
                    </FormGroup>



                 <br />




                    <Col sm={{ size: 10 }}>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button onClick={validateLogin} >Submit</Button>
                                <Button type="submit" className="btn btn-danger" type="reset">
                                    
                                    Reset
                                </Button>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </div >
        </div >
    </div>

    );


    {/*<div>
            <div className="container">
                <div className="className='row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <h4> Login

                            </h4>

                        </div>
                    </div>

                    <div className="card-body " >

                        <div className="form-group mb-3">

                            <table cellPadding="7px">

                                <tr>
                                    <td>User Name </td>

                                    <td><input type="text" name="user_name" onChange={(e) => setuser_name(e.target.value)} /></td>

                                </tr>

                                <tr>
                                    <td>Password </td>

                                    <td><input type="password" name="password" onChange={(e) => setPassword(e.target.value)} /></td>

                                </tr>
                                <tr>

                                </tr>
                                <td></td><br />
                                <button type="submit" onClick={validateLogin} className="btn btn-outline-secondary">Save</button>
                            </table>

                        </div>

                    </div>
                </div>

            </div >


        </div >*/}




}

export default Login;