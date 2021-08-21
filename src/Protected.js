import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Protected(props) {

    let Component = props.Component;
    console.log(props)
    const history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history.push('/login')
      }
    }, [])

    return (


        < div  >
            <Component></Component>

        </div >


    );






}

export default Protected;