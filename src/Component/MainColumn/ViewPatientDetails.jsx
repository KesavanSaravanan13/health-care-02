import Swal from "sweetalert2";
import DetailsRow from "./DetailsRow";
import del from '../Assests/delete (1).png';
import '../MainColumn/ViewPatientDetails.css';
import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { deleteProducts, getProductsById, updateProducts } from "./AxiosApi";
import EditColumn from "./EditColumn";

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
                    toast: true,
                    position: "top-end",
                    icon: "success",
                    title: "Deleted",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    }
                });
            } else {
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
            const response = await updateProducts(patientId, formData);
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
            }
        }
        fetchItem();
    }, [patientId]);

    const handleInputChange = (e) => {
        setCount(count + 1);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const patient = (data.id == patientId);
    return (
        loading ?
            (
                <Col className="col-12 m-0 p-2 d-flex justify-content-center align-items-center">
                    <Row className="spinner-border" role="status" style={{ color: '#5DCAD4' }}>
                        <span className="visually-hidden">Loading...</span>
                    </Row>
                </Col>
            ) : (patient ? (
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
                    {editButton ?
                        <EditColumn formData={formData} handleInputChange={handleInputChange} handleSave={handleSave} setEditbutton={setEditbutton} handleCancel={handleCancel} setCount={setCount} count={count} />
                        : null}
                </Col>) : <Col className="col-11 m-0 p-0 flex-fill ps-5 pt-5 fs-3 fw-semibold">Patient not found</Col>)
    );
}
export default ViewPatientDetails;