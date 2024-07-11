
import TopRow from '../TopRow/TopRow';
import { Button, Col, Row, Table } from 'react-bootstrap';
import search from '../Assests/search-interface-symbol.png';
import Td from './Td';
import { Route, Routes } from 'react-router-dom';
import MainColumn from './MainColumn';

const PatientList = () => {
    return(
        <div className="col-11 m-0 p-2 p-md-4 flex-fill">
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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Issue type</th>
                                <th>Comsumption type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='m-0 p-0'>
                                <Td id={'id1001'} value={'1001'} />
                                <Td id={'id1001'} value={'Steve Williams'} />
                                <Td id={'id1001'} value={'steve@gmail.com'} />
                                <Td id={'id1001'} value={'+1 201 305 6072'} />
                                <Td id={'id1001'} value={'Disorder'} />
                                <Td id={'id1001'} value={'72'} />
                            </tr>
                            <tr className='m-0 p-0'>
                                <Td id={'id1002'} value={'1002'} />
                                <Td id={'id1002'} value={'Janet'} />
                                <Td id={'id1002'} value={'janet@gmail.com'} />
                                <Td id={'id1002'} value={'+1 203 378 8072'} />
                                <Td id={'id1002'} value={'Stroke'} />
                                <Td id={'id1002'} value={'47'} />
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </div>
    );
}

export default PatientList;