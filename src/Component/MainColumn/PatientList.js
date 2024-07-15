
import TopRow from '../TopRow/TopRow';
import { Button, Col, Row, Table } from 'react-bootstrap';
import search from '../Assests/search-interface-symbol.png';
import Td from './Td';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import MainColumn from './MainColumn';
import { useState, useEffect } from 'react';
import edit from '../Assests/delete (2).png';
import del from '../Assests/delete (1).png';
import view from '../Assests/view.png';
import { Link } from 'react-router-dom';
import '../MainColumn/PatientList.css';
import { logDOM } from '@testing-library/react';

const PatientList = () => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(response => {
                setLoading(false);
                setError(true);
            });
    }, []);

    if (loading)
        return (
            <div className="col-11 m-0 p-2 p-md-4 d-flex flex-column justify-content-center align-items-center">
                <div class="spinner-border" role="status" style={{ color: '#5DCAD4' }}>
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div className='col-12 m-0 p-0 text-center' >
                    <h6 style={{ color: '#5DCAD4' }}>Loading....</h6>
                </div>
            </div>
        );


    return (
            <div className="col-11 m-0 p-2 p-md-4 flex-fill overflow-auto">
                <TopRow name={'Jessica'} />
                <Row className='m-0 p-0 pt-4 d-flex justify-content-between fs-5 fw-semibold'>
                    <Col className='col-4 m-0 p-0 text-start'>Patient List</Col>
                    <Col className='col-4 m-0 p-0'>
                        <form className='m-0 p-0'>
                            <Row className='m-0 p-0 d-flex justify-content-between align-items-center'>
                                <Col className='col-10 m-0 p-0 px-3 inputCol'>
                                    <div className='row m-0 p-0 d-flex flex-nowrap justify-content-between'>
                                        <div className='col-1 m-0 p-2 ps-0 pt-1'>
                                            <Button className='m-0 p-0' variant='none'>
                                                <img src={search} class=" m-0 p-0"
                                                    width="20px" height="15px" alt=""></img>
                                            </Button>
                                        </div>
                                        <input type="text" className='col-8 m-0 ms-2 p-2 ps-0 inputrow' placeholder='Search'></input>
                                    </div>
                                </Col>
                                <Col className='col-2 m-0 p-0 w-auto'><Button className='px-3 p-1 fs-5 fw-semibold text-light ' style={{ backgroundColor: "#5dcad4", border: 'None' }}>+</Button></Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
                <Row className='m-0 mt-3 p-0'>
                    <Table>
                        <thead>
                            <tr>
                                <th>Patient ID</th>
                                <th>Treatment Name</th>
                                <th>Joined Date</th>
                                <th>Consumption type</th>
                                <th>View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(item => (
                                    <tr className='m-0 p-0' key={item.id}>
                                        <Td id={item.id} value={item.id} />
                                        <Td id={item.id} value={item.title} />
                                        <Td id={item.id} value={item.creationAt} />
                                        <Td id={item.id} value={item.price} />
                                        <td><Link to={`/patientlist/${item.id}`}><img src={view} /></Link></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Row>
            </div>
    );
}

export default PatientList;