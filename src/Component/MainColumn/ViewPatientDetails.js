import { Link, useNavigate, useParams } from "react-router-dom";
import TopRow from "../TopRow/TopRow";
import doc from '../Assests/doc.jpg';
import { Col, Row } from "react-bootstrap";
import '../MainColumn/ViewPatientDetails.css';
import call from '../Assests/telephone.png'
import msg from '../Assests/Frame 23.png';
import video from '../Assests/video.png';
import del from '../Assests/delete (1).png';
import { useState, useEffect } from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";


const ViewPatientDetails = () => {
    const [count, setCount] = useState(0);
    const { patientId } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState('');
    const [editButton, setEditbutton] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        title: data.title,
        creationAt: data.creationAt,
        price: data.price
    });

    const handleCancel = () => {
        setEditbutton(!editButton);

    }
    const handleDel = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Canceled!",
                    icon: "success"
                });
            }
        });
    }
    const handleDelete = async () => {
        try {
            await axios.delete(`https://api.escuelajs.co/api/v1/products/${patientId}`);
            navigate('/patientlist');
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }

    const handleSave = async () => {
        try {
            const response = await axios.put(`https://api.escuelajs.co/api/v1/products/${patientId}`, formData);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${patientId}`);
                setData(response.data);
                setFormData({
                    title: response.data.title,
                    creationAt: response.data.creationAt,
                    price: response.data.price
                });
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);

                Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "error",
                    title: "Failed",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    }
                });
            }
        }
        fetchItem();
    }, [patientId]);

    if (loading)
        return (
            <Col className="col-11 m-0 p-2 p-md-4 d-flex flex-column justify-content-center align-items-center">
                <Row className="spinner-border" role="status" style={{ color: '#5DCAD4' }}>
                    <span className="visually-hidden"></span>
                </Row>
                <Col className='col-12 m-0 p-0 text-center' >
                    <h6 style={{ color: '#5DCAD4' }}>Loading....</h6>
                </Col>
            </Col>
        );

    const handleInputChange = (e) => {
        setCount(count + 1);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const patient = (data.id == patientId);
    if (!patient) {
        return <Col className="col-11 m-0 p-0 flex-fill ps-5 pt-5 fs-3 fw-semibold">Patient not found</Col>;
    }
    return (
        <Col className="m-0 p-0 col-11 flex-fill position-relative">
            <div className="card-info m-0 p-0 vh-100">
                <Row className="m-0 p-2 p-md-4 vh-100">
                    <Row className="p-0 m-0">
                        <Col className='col-12 m-0 p-0 pb-5'>
                            <Row className="p-0 m-0 justify-content-end FirstRow flex-wrap">
                                <TopRow name={'Jessica'} />
                            </Row>
                            <Row className="p-0 py-2 pt-4 m-0 profile">
                                <Col className="col-2 m-0 p-0 me-2 w-auto d-flex align-items-center"><Link to={'/patientlist'} className="text-decoration-none text-black">Patient Details</Link></Col>
                                <Col className="col-1 ms-2 w-auto m-0 p-0 fs-3 d-flex align-items-center text-secondary">{'>'}</Col>
                                <Col className="m-0 p-0 ms-3 fs-3 d-flex align-items-center">{data.title}</Col>
                            </Row>
                            <Row className="p-0 py-2 m-0 patientActive d-flex justify-content-center justify-content-sm-start">
                                <Col className='col-1 m-0 p-0 px-2 docimg '><img src={doc} className='igg' width={80} height={80} alt="Profile"></img></Col>
                                <Col className='col-8 col-md-5 m-0 p-0 px-2 d-flex flex-wrap flex-fill mt-3 mt-sm-0'>
                                    <Row className="m-0 p-0 flex-grow-1">
                                        <Col className='col-12 m-0 p-0 name01 h-auto'>
                                            <Row className="m-0 p-0">
                                                <Col className="col-8 m-0 p-0 me-2 w-auto">{data.title}</Col>
                                                <Col className="col-2 m-0 p-0 flex-grow-1"><span className='m-0 p-0 text-success fw-semibold' style={{ fontSize: "14px" }}>• Active</span></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="m-0 p-0 w-100">
                                        <Col className='col-12 m-0 p-0 px-2 w-auto fw-semibold' style={{ backgroundColor: '#e9f5f7', borderRadius: "5px", height: "fit-content", color: "#5dcad4", fontSize: "12px" }}>{moment().format('lll')}</Col>
                                    </Row>
                                    <Row className="m-0 p-0 ">
                                        <Col className='col-12 m-0 p-0 name02 h-auto fw-semibold'>{`consumption type : ${data.price}`}</Col>
                                    </Row>
                                </Col>
                                <Col className='col py-2 py-sm-0 p-0 m-0 d-flex justify-content-end align-items-center pe-md-3 pe-2'>
                                    <Row className="row m-0 p-0 py-2 h-auto" style={{ height: "55px", width: "150px", border: "1px solid lightgray", borderRadius: "10px" }}>
                                        <Col className="m-0 p-0 d-flex justify-content-center align-items-center  h-auto">
                                            <img src={call} className="m-0 p-0" width={"20px"} height={"20px"} />
                                        </Col>
                                        <Col className="m-0 p-0 d-flex justify-content-center align-items-center h-auto">
                                            <img src={msg} className="m-0 p-0" width={"20px"} height={"20px"} />
                                        </Col>
                                        <Col className="m-0 p-0 d-flex justify-content-center align-items-center  h-auto">
                                            <img src={video} className="m-0 p-0" width={"20px"} height={"20px"} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="m-0 p-0 py-5 d-flex  justify-content-end">
                                <Col className="btn m-0 p-0 col-2 w-auto px-3 py-1 mx-2 rounded-4 text-light" style={{ backgroundColor: '#5dcad4' }} onClick={handleCancel}>Edit</Col>
                                <Col className="btn m-0 p-0 col-2 w-auto px-3 py-1 mx-2 rounded-4 text-light border-danger border-2" onClick={handleDel}><img src={del} alt="delete" /></Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </div>
            {editButton ? (
                <Col className="col-12 m-0 p-2 p-md-4 flex-fill d-flex justify-content-center align-items-center position-absolute overlay" style={{ top: '0', left: '0', zIndex: '1000' }}>
                    <form className="m-0 rounded-4 bg-white p-3 p-md-5">
                        <h4 className='m-0 p-0 text-start col-12 flex-fill'>Edit Details : </h4>
                        <Col className='m-0 p-0 py-2 col-12 '>
                            <Row className="m-0 p-0 ">
                                <Col className="col-sm-6 m-0 p-0 d-flex justify-content-end">
                                    <label className='m-0 p-0 fs-5 fw-semibold' style={{ width: '200px' }} htmlFor='title'>Teartment Name : </label>
                                </Col>
                                <Col className="col-sm-6m-0 p-0">
                                    <input className='p-2 m-0' name="title" value={formData.title} onChange={handleInputChange}></input>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='m-0 p-0 py-2 col-12'>
                            <Row className="m-0 p-0">
                                <Col className="col-sm-6 m-0 p-0 d-flex justify-content-end">
                                    <label className='m-0 p-0 fs-5 fw-semibold' style={{ width: '200px' }} htmlFor='price'>Consumption Type : </label>
                                </Col>
                                <Col className="col-sm-6 m-0 p-0">
                                    <input className='p-2 m-0' type="Number" name="price" value={formData.price} onChange={handleInputChange}></input>
                                </Col>
                            </Row>
                        </Col>
                        <Row className='m-0 p-0 d-flex justify-content-end mt-3'>
                            <Col className="btn m-0 p-0 col-2 w-auto px-3 py-1 mx-2 rounded-4 text-light" style={{ backgroundColor: '#5dcad4' }} onClick={() => {
                                handleSave();
                                setEditbutton(false);
                                if (count > 0) {
                                    Swal.fire({
                                        toast: true,
                                        position: "top-end",
                                        icon: "success",
                                        title: "Edited Successfully",
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                            toast.addEventListener('mouseenter', Swal.stopTimer);
                                            toast.addEventListener('mouseleave', Swal.resumeTimer);
                                        }
                                    });
                                } else {
                                    setCount(0);
                                    Swal.fire({
                                        toast: true,
                                        position: "top-end",
                                        icon: "info",
                                        title: "Please edit Something",
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                            toast.addEventListener('mouseenter', Swal.stopTimer);
                                            toast.addEventListener('mouseleave', Swal.resumeTimer);
                                        }
                                    });
                                }
                            }}>Save</Col>
                            <Col className="btn m-0 p-0 col-2 w-auto bg-danger mx-2 px-3 py-1 rounded-4 text-light" onClick={() => {
                                handleCancel();
                                Swal.fire({
                                    toast: true,
                                    position: "top-end",
                                    icon: "info",
                                    title: "Cancelled",
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                        toast.addEventListener('mouseenter', Swal.stopTimer);
                                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                                    }
                                });
                            }}>Cancel</Col>
                        </Row>
                    </form >
                </Col >) : null}
        </Col>
    );
}
export default ViewPatientDetails;