
import TopRow from '../TopRow/TopRow';
import { Button, Col, Row, Table } from 'react-bootstrap';
import search from '../Assests/search-interface-symbol.png';
import Td from './Td';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import MainColumn from './MainColumn';
import { useState, useEffect, useNavigate } from 'react';
import edit from '../Assests/delete (2).png';
import del from '../Assests/delete (1).png';
import view from '../Assests/view.png';
import { Link } from 'react-router-dom';
import '../MainColumn/PatientList.css';
import { logDOM } from '@testing-library/react';

const PatientList = () => {

    const [data, setData] = useState();
    const [displayOn, setDisplayOn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        price: 0,
        creationAt : '',
        description: '',
        categoryId: 1,
    });



    const handleDisplay = () => {
        setDisplayOn(!displayOn);
    }

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

    const handleCreate = async () => {
        try {
            const payload = {
                title: formData.title, 
                price: formData.price,
                description: "A brief description of the product", 
                categoryId: 1, 
                creationAt : formData.creationAt,
                images: ["https://example.com/product-image.jpg"] 
            };
            const response = await axios.post('https://api.escuelajs.co/api/v1/products', payload);
            setData([...data, response.data]);
            alert('New List Added!!!');
            setDisplayOn(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    return (
        <div className='col-11 m-0 p-2 p-md-4 flex-fill overflow-auto m-0 p-0 position-relative'>
            <div className="col-12 m-0 p-0 flex-fill">
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
                                <Col className='col-2 m-0 p-0 w-auto'><Button className='px-3 p-1 fs-5 fw-semibold text-light ' onClick={handleDisplay} style={{ backgroundColor: "#5dcad4", border: 'None' }}>+</Button></Col>
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
            {displayOn ? <div className="col-6 m-0 p-0 bg-white d-flex justify-content-center align-items-center position-fixed rounded-5" style={{ top: '300px', left: '400px', zIndex: '1000' }} >
                <form>
                    <div className='m-0 p-0 row text-center d-flex justify-content-center'>
                        <h4 className='m-0 p-5 text-start col-5 '>Add Details : </h4>
                        <div className='m-0 p-0 col-12'>
                            <label className='m-0 p-0 fs-5 fw-semibold' style={{ width: '200px' }} for='title'>Teartment Name : </label>
                            <input className='w-25 p-2 ms-2 m-0' name="title" value={formData.title} onChange={handleInputChange}></input>
                        </div>
                        <div className='m-0 p-0 col-12'>
                            <label className='m-0 p-0 fs-5 fw-semibold' style={{ width: '200px' }} for='creationAt'>Joined Date : </label>
                            <input className='w-25 p-2 ms-2 m-0' name="creationAt" value={formData.creationAt} onChange={handleInputChange}></input>
                        </div>
                        <div className='m-0 p-0 col-12'>
                            <label className='m-0 p-0 fs-5 fw-semibold' style={{ width: '200px' }} for='price'>Consumption Type : </label>
                            <input className='w-25 p-2 ms-2 m-0' type="Number" name="price" value={formData.price} onChange={handleInputChange}></input>
                        </div>
                    </div>
                    <div className='m-0 py-5 row d-flex justify-content-end w-75'>
                        <Col className="btn m-0 p-0 col-2 w-auto px-3 py-1 mx-2 rounded-4 text-light" style={{ backgroundColor: '#5dcad4' }} onClick={handleCreate}>Create</Col>
                        <Col className="btn m-0 p-0 col-2 w-auto bg-danger mx-2 px-3 py-1 rounded-4 text-light" onClick={handleDisplay}>Cancel</Col>
                    </div>

                </form>
            </div> : null}
            {displayOn ? <div className='col-12 m-0 p-0 d-flex justify-content-around' id='overlay'></div> : null}
        </div>
    );
}

export default PatientList;