import axios from "axios";
import Swal from "sweetalert2";
import DetailsRow from "./DetailsRow";
import del from '../Assests/delete (1).png';
import '../MainColumn/ViewPatientDetails.css';
import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { Cancel, Error, Success } from "./SweetFires";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProducts, getProducts, getProductsById, updateProducts } from "./AxiosApi";

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

    const handleCancel = () => setEditbutton(!editButton);
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
            await deleteProducts(patientId);
            navigate('/patientlist');
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }

    const handleSave = async () => {
        try {
            const response = await updateProducts (patientId, formData);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await getProductsById(patientId);
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
                Error();
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
                            <DetailsRow value={data} />
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
                                    Success();
                                } else {
                                    setCount(0);
                                    Cancel();
                                }
                            }}>Save</Col>
                            <Col className="btn m-0 p-0 col-2 w-auto border-danger mx-2 px-3 py-1 rounded-4 text-danger border-2 fw-bold" onClick={() => {
                                handleCancel();
                                Cancel();
                            }}>Cancel</Col>
                        </Row>
                    </form >
                </Col >) : null}
        </Col>
    );
}
export default ViewPatientDetails;