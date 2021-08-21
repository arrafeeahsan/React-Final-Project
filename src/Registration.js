import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Navbar from './Navbar';

const Registration = () => {


    //const [full_name, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [re_pass, setCpassword] = useState("");
    //const [address, setAddress] = useState("");
    //const [country, setCountry] = useState("");
    //const [dob, setDob] = useState("");
   // const [type, setType] = useState("");
    const [data, setData] = useState([])

    const history = useHistory();

    //const [fullnameErr, setFullnameErr] = useState("");
    const [usernameErr, setUsernameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setpasswordErr] = useState("");
    // const [cpasswordErr, setCpasswordErr] = useState("");
    //const [addressErr, setAddressErr] = useState("");
    //const [countryErr, setCountryErr] = useState("");
    //const [dobErr, setDobErr] = useState("");
    //const [typeErr, setTypeErr] = useState("");

    const validate = (e) => {
        //const fullnameErr = {};
        const usernameErr = {};
        const emailErr = {};
        const passwordErr = {};
        //const cpasswordErr = {};
        //const addressErr = {};
        //const countryErr = {};
        //const dobErr = {};
        //const typeErr = {};

        let isValid = true;
        // if (full_name.trim().length < 5) {
        //     fullnameErr.fullnameShort = " name must be 5 charecter";
        //     isValid = false;


        // }
        if (username.trim().length < 3) {
            usernameErr.usernameShort = "User namemust be 3 charecter";
            isValid = false;
        }
        if (email.trim().length <= 5) {
            emailErr.emailShort = "email namemust be grater than 5 charecter and valid";
            isValid = false;


        }
        if (password.trim().length <= 6) {
            passwordErr.passwordShort = "Password must be  6 charecter ";
            isValid = false;

        }
        // if (address.trim().length <= 6) {
        //     addressErr.addressShort = "address must be  6 charecter ";
        //     isValid = false;

        // }
        // if (country.trim().length <= 3) {
        //     countryErr.countryShort = "country must be  3 charecter ";
        //     isValid = false;

        // }
        // if (type.trim().length <= 3) {
        //     typeErr.typeShort = "type must be  3 charecter ";
        //     isValid = false;

        // }

        //setFullnameErr(fullnameErr);
        setUsernameErr(usernameErr);
        setEmailErr(emailErr);
        setpasswordErr(passwordErr);
        //setAddressErr(addressErr);
        //setCountryErr(countryErr);
        //setTypeErr(typeErr);

        return isValid;




    }


    async function Register() {

        //console.warn(full_name, username, email, password, cpassword, address, country, dob, type);
        console.warn(username, email, password, re_pass);
        const formData = new FormData();
        //formData.append('full_name', full_name);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('re_pass', re_pass);
        //formData.append('address', address);
        //formData.append('country', country);
        //formData.append('dob', dob);
        //formData.append('type', type);

        /*let axiosConfig = {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };*/


        const res = await axios.post('http://127.0.0.1:8000/api/registration', formData);


        if (res.data.status === 200) {
            console.log(res.data.message);

        }
        {/*localStorage.setItem('user-info', JSON.stringify(res));*/ }
        history.push("/login");



    }

    return (
        <div>
            <Navbar></Navbar>
        <div className="container">
            <div className="card-body ">
                <Form>
                    
                    <FormGroup row>
                        <Label for="c_id" sm={2}>Username</Label>
                        <Col sm={7}>
                            <Input type="text" name="username" id="username" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} onKeyUp={validate} onBlur={validate} />
                        </Col>
                        <Col> {Object.keys(usernameErr).map((key) => {
                            return <div style={{ color: "red" }}>{usernameErr[key]} </div>
                        })}
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="description" sm={2}>Email</Label>
                        <Col sm={7}>
                            <Input type="text" name="email" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} onKeyUp={validate} onBlur={validate} />
                        </Col>
                        <Col> {Object.keys(emailErr).map((key) => {
                            return <div style={{ color: "red" }}>{emailErr[key]} </div>
                        })}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="quiz_date" sm={2}>Password</Label>
                        <Col sm={7}>
                            <Input type="password" name="password" id="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)} onKeyUp={validate} onBlur={validate} />
                        </Col>
                        <Col> {Object.keys(passwordErr).map((key) => {
                            return <div style={{ color: "red" }}>{passwordErr[key]} </div>
                        })}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="quiz_date" sm={2}>Re-Password</Label>
                        <Col sm={7}>
                            <Input type="password" name="re_pass" id="password" placeholder="confrim password" onChange={(e) => setCpassword(e.target.value)} />
                        </Col>
                        {/* <Col> {Object.keys(quizdateErr).map((key) => {
                            return <div style={{ color: "red" }}>{quizdateErr[key]} </div>
                        })}
                    </Col> */}
                    </FormGroup>
                    
                    <br />



                    <Col sm={{ size: 10 }}>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button onClick={Register}>Submit</Button>
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
}

export default Registration;