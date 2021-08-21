import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';


import axios from 'axios';
import NavbarD from './NavbarD';

const SearchCourse = () => {

    const [clientSch, setSearchCourse] = useState('');
    const [list, setList] = useState([]);



    async function search(clientSch) {
        if (clientSch.length >= 1) {
            await axios.get("http://127.0.0.1:8000/api/client-search/" + clientSch)
                .then(response => {
                    const result = response.data;
                    setList(result);

                });
        }
    }

    

    return (
        <>
            <NavbarD/>
            <center className='mt-5'><h1>Search Clients</h1></center>
            <div className='row justify-content-center'>
                <div className='col-5 mt-5'>
                    <input type='text' name='search' className='form-control' placeholder='Search by ID or Email' onChange={(e) => { search(e.target.value) }}></input>
                    
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-5 mt-5'>
                    <center>
                        
                            
                                <table table className="table table-bordered table-striped" cellPadding="15px">
                                    <thead>
                                        <tr>
                                            <td>Client ID </td>
                                            <td>Client Name </td>
                                            <td>Client Username </td>
                                            <td>Client Email</td>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            list.map((row) =>
                                                <tr key={row.id}>
                                                    <td>{row.id}</td>
                                                    <td>{row.client_name}</td>
                                                    <td>{row.client_username}</td>
                                                    <td>{row.client_email}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>

                                </table>
                                 
                        

                        <Link to='/client-list' className='btn btn-primary'>Back</Link>
                    </center>
                </div>
            </div>
        </>
    );
}

export default SearchCourse;