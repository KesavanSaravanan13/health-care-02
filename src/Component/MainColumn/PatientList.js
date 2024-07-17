
import TopRow from '../TopRow/TopRow';
import { Button, Col, Row, Table } from 'react-bootstrap';
import search from '../Assests/search-interface-symbol.png';
import Td from './Td';
import axios from 'axios';
import { useState, useEffect, useNavigate } from 'react';
import view from '../Assests/view.png';
import { Link } from 'react-router-dom';
import '../MainColumn/PatientList.css';
import Swal from 'sweetalert2';

const PatientList = () => {

    const [data, setData] = useState();
    const [displayOn, setDisplayOn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        price: 0,
        creationAt: '',
        description: 'Hi there',
        categoryId: 1,
        images: ["https://example.com/product-image.jpg"]
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
            const response = await axios.post('https://api.escuelajs.co/api/v1/products', formData);
            setData([...data, response.data]);
            setDisplayOn(false);
            handlePre();
        } catch (error) {
            console.error(error);
            Swal.fire({
                toast: true,
                position: "top-end",
                icon: "error",
                title: "Failed To Add, Please Fill Something!!!",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                }
            });
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
        
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Data Added Successfully",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });
    };

    return (
        <div className='col-11 m-0 p-2 p-md-4 flex-fill overflow-auto m-0 p-0 position-relative'>
            <div className="col-12 m-0 p-0 flex-fill">
                <TopRow name={'Jessica'} />
                <Row className='m-0 p-0 pt-4  fs-5 fw-semibold'>
                    <Col className='col-4 m-0 p-0 text-start flex-grow-1'>Patient List</Col>
                    <Col className='col-4 m-0 p-0 flex-grow-1 d-flex justify-content-end'>
                        <form className='m-0 p-0'>
                            <Row className='m-0 p-0 d-flex justify-content-sm-between justify-content-end align-items-center '>
                                <Col className='col-10 m-0 p-0 px-3 inputCol flex-grow-1 flex-sm-grow-0'>
                                    <div className='row m-0 p-0 d-flex flex-nowrap justify-content-between'>
                                        <div className='col-1 m-0 p-2 ps-0 pt-1'>
                                            <Button className='m-0 p-0' variant='none'>
                                                <img src={search} class=" m-0 p-0"
                                                    width="20px" height="15px" alt=""></img>
                                            </Button>
                                        </div>
                                        <input type="text" className='col-8 m-0 ms-4 p-2 ps-0 inputrow' placeholder='Search'></input>
                                    </div>
                                </Col>
                                <Col className='col-2 m-0 p-0 w-auto mt-2 mt-md-0'><Button className='px-3 p-1 fs-5 fw-semibold text-light ' onClick={handleDisplay} style={{ backgroundColor: "#5dcad4", border: 'None' }}>+</Button></Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
                <Row className='m-0 mt-3 p-0 overflow-auto'>
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
                                data?.map(item => (
                                    <tr className='m-0 p-0' key={item.id}>
                                        <Td id={item.id} value={item.id} />
                                        <Td id={item.id} value={item.title} />
                                        <Td id={item.id} value={item.creationAt} />
                                        <Td id={item.id} value={item.price} />
                                        <td className='m-0 text-center'><Link to={`/patientlist/${item.id}`}><img src={view} /></Link></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Row>
            </div>
            {displayOn ? <div className="col-8 col-sm-7 col-lg-6 col-xl-5 m-0 p-0 bg-white d-flex justify-content-center align-items-center position-fixed rounded-5" style={{ top: '25%', left: '25%', zIndex: '1000' }} >
                <form className="m-0 p-0 col-12">
                    <div className='m-0 p-0 row text-center d-flex justify-content-center'>
                        <h4 className='m-0 p-5 px-3 px-sm-5 text-start col-5 flex-fill'>Add Details : </h4>
                        <div className='m-0 p-3 py-2 col-12'>
                            <div className="row m-0 p-0 flex-wrap">
                                <label className='m-0 p-0 fs-5 fw-semibold' style={{ width: '200px' }} for='title'>Teartment Name : </label>
                                <input className='p-2 m-0 w-50 flex-fill' name="title" value={formData.title} onChange={handleInputChange}></input>
                            </div>
                        </div>
                        <div className='m-0 p-3 py-2 col-12'>
                            <div className="row m-0 p-0">
                                <label className='m-0 p-0 fs-5 fw-semibold' style={{ width: '200px' }} for='creationAt'>Joined Date : </label>
                                <input className='p-2 m-0 w-50 flex-fill' name="creationAt" value={formData.creationAt} onChange={handleInputChange}></input>
                            </div>
                        </div>
                        <div className='m-0 p-3 py-2 col-12'>
                            <div className="row m-0 p-0">
                                <label className='m-0 p-0 fs-5 fw-semibold' style={{ width: '200px' }} for='price'>Consumption Type : </label>
                                <input className='p-2 m-0 w-50 flex-fill' type="Number" name="price" value={formData.price} onChange={handleInputChange}></input>
                            </div>
                        </div>
                    </div>
                    <div className='m-0 py-5 row d-flex justify-content-end w-75'>
                        <Col className="btn m-0 p-0 col-2 w-auto px-3 py-1 mx-2 rounded-4 text-light" style={{ backgroundColor: '#5dcad4' }} onClick={() => {
                            handleCreate();
                        }}>Create</Col>
                        <Col className="btn m-0 p-0 col-2 w-auto bg-danger mx-2 px-3 py-1 rounded-4 text-light" onClick={() => {
                            handleDisplay();
                            handlePre();
                        }}>Cancel</Col>
                    </div>
                </form>
            </div> : null}
            {displayOn ? <div className='col-12 m-0 p-0 ' id='overlay'></div> : null}
        </div>
    );
}

export default PatientList;