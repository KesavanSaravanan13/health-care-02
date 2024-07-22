import Td from './Td';
import axios from 'axios';
import TopRow from '../TopRow/TopRow';
import view from '../Assests/view.png';
import '../MainColumn/PatientList.css';
import search from '../Assests/search-interface-symbol.png';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { Cancel, Error, Success } from './SweetFires';
import moment from 'moment';

const PatientList = () => {
    const [data, setData] = useState();
    const [displayOn, setDisplayOn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        price: 0,
        creationAt: moment().format('lll'),
        description: 'Hi there',
        categoryId: 1,
        images: ["https://example.com/product-image.jpg"]
    });
    const handleDisplay = () => setDisplayOn(!displayOn);
    
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(response => {
                console.log(error);
                setLoading(false);
                setError(true);
            });
    }, [error]);
    
    const handleCreate = async () => {
        try {
            const response = await axios.post('https://api.escuelajs.co/api/v1/products', formData);
            setData([...data, response.data]);
            setDisplayOn(false);
            handlePre();
        } catch (error) {
            console.error(error);
            Error();
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePre = (e) => {
        setFormData({
            title: '',
            price: 0,
            creationAt: '',
        });
        Success();
    };

    return (
        <Col className='col-11 m-0 p-2 p-md-4 flex-fill overflow-auto m-0 p-0 position-relative'>
            <Col className="col-12 m-0 p-0 flex-fill">
                <TopRow name={'Jessica'} />
                <Row className='m-0 p-0 pt-4  fs-5 fw-semibold'>
                    <Col className='col-4 m-0 p-0 text-start flex-grow-1'>Patient List</Col>
                    <Col className='col-4 m-0 p-0 flex-grow-1 d-flex justify-content-end'>
                        <form className='m-0 p-0'>
                            <Row className='m-0 p-0 d-flex justify-content-sm-between justify-content-end align-items-center '>
                                <Col className='col-10 m-0 p-0 px-3 inputCol flex-grow-1 flex-sm-grow-0'>
                                    <Row className='m-0 p-0 d-flex flex-nowrap justify-content-between'>
                                        <Col className='col-1 m-0 p-2 ps-0 pt-1'>
                                            <Button className='m-0 p-0' variant='none'>
                                                <img src={search} className=" m-0 p-0"
                                                    width="20px" height="15px" alt=""></img>
                                            </Button>
                                        </Col>
                                        <input type="text" className='col-8 m-0 ms-4 p-2 ps-0 inputrow' placeholder='Search'></input>
                                    </Row>
                                </Col>
                                <Col className='col-2 m-0 p-0 w-auto mt-2 mt-md-0 '><Button className='px-3 p-1 fs-5 fw-semibold text-light w-auto' onClick={handleDisplay} style={{ backgroundColor: "#5dcad4", border: 'None' }}>+</Button></Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
                <Row className='m-0 mt-3 p-0 overflow-auto'>
                    <Table>
                        <thead>
                            <tr>
                                <th className='col-1'>S.No</th>
                                <th className='col-4'>Treatment Name</th>
                                <th className='col-3'>Joined Date</th>
                                <th className='col-2'>Consumption type</th>
                                <th className='text-center col-1'>View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ? (
                                    <tr>
                                        <td colSpan={4}>
                                            <Col className="col-11 m-0 p-2 d-flex flex-column justify-content-center align-items-center">
                                                <Row className="spinner-border" role="status" style={{ color: '#5DCAD4' }}>
                                                    <span className="visually-hidden">Loading...</span>
                                                </Row>
                                            </Col>
                                        </td>
                                    </tr>
                                ) : (
                                    data?.map(item => (
                                        <tr className='m-0 p-0' key={item.id}>
                                            <Td type={'text'} className='col-1' id={item.id} value={item.id} />
                                            <Td type={'text'} className='col-4' id={item.id} value={item.title} />
                                            <Td type={'date'} className='col-3' id={item.id} value={item.creationAt}></Td>
                                            <Td type={'text'} className='col-2' id={item.id} value={item.price} />
                                            <td className='m-0 text-center col-1'><Link to={`/patientlist/${item.id}`}><img src={view} alt='view' /></Link></td>
                                        </tr>
                                    )))
                            }
                        </tbody>
                    </Table>
                </Row>
            </Col>
            {displayOn ? <Col className="col-8 col-sm-7 col-lg-6 col-xl-5 m-0 p-0 bg-white d-flex justify-content-center align-items-center position-fixed rounded-5" style={{ top: '25%', left: '25%', zIndex: '1000' }} >
                <form className="m-0 rounded-4 bg-white p-3 p-md-5">
                    <h4 className='m-0 p-0 text-start col-12 flex-fill'>Add Details : </h4>
                    <Col className='m-0 p-0 py-2 col-12 '>
                        <Row className="m-0 p-0 ">
                            <Col className="col-12 col-lg-6 m-0 p-0 d-flex justify-content-lg-end">
                                <label className='m-0 p-0 fs-5 fw-semibold' style={{ width: '200px' }} htmlFor='title'>Teartment Name : </label>
                            </Col>
                            <Col className="col-12 col-lg-6 m-0 p-0">
                                <input className='p-2 m-0' name="title" value={formData.title} onChange={handleInputChange}></input>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='m-0 p-0 py-2 col-12'>
                        <Row className="m-0 p-0">
                            <Col className="col-12 col-lg-6 m-0 p-0 d-flex justify-content-lg-end">
                                <label className='m-0 p-0 fs-5 fw-semibold' style={{ width: '200px' }} htmlFor='price'>Consumption Type : </label>
                            </Col>
                            <Col className="col-12 col-lg-6 m-0 p-0">
                                <input className='p-2 m-0' type="Number" name="price" value={formData.price} onChange={handleInputChange}></input>
                            </Col>
                        </Row>
                    </Col>
                    <Row className='m-0 p-0 d-flex justify-content-end mt-3'>
                        <Col className="btn m-0 p-0 col-2 w-auto px-3 py-1 mx-2 rounded-4 text-light" style={{ backgroundColor: '#5dcad4' }} onClick={() => {
                            handleCreate();
                        }}>Create</Col>
                        <Col className="btn m-0 p-0 col-2 w-auto bg-danger mx-2 px-3 py-1 rounded-4 text-light" onClick={() => {
                            handleDisplay();
                            handlePre();
                            Cancel();
                        }}>Cancel</Col>
                    </Row>
                </form >
            </Col> : null}
            {displayOn ? <div className='col-12 m-0 p-0 ' id='overlay'></div> : null}
        </Col>
    );
}

export default PatientList;