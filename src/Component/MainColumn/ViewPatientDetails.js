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



const ViewPatientDetails = () => {
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
        let choice = prompt('do you want to delete for sure!!','no');
        if(choice ==='yes' || choice ==='Yes'){
            handleDelete();
        }else{
            alert('You have chosed No');
        }
    }
    const handleDelete = async () => {
        try {
            await axios.delete(`https://api.escuelajs.co/api/v1/products/${patientId}`);
            alert('Item deleted successfully!');
            navigate('/patientlist');
        } catch (error) {
            console.error('Error deleting item:', error);
            alert('Failed to delete item. Please try again.');
        }
    }

    const handleSave = async () => {
        try {
            const response = await axios.put(`https://api.escuelajs.co/api/v1/products/${patientId}`, formData);
            setData(response.data);
            setEditbutton(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${patientId}`);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchItem();
    }, [patientId]);

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

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        console.log(e.target.title);
    };

    const patient = (data.id == patientId);
    if (!patient) {
        return <div className="col-11 m-0 p-0 flex-fill ps-5 pt-5 fs-3 fw-semibold">Patient not found</div>;
    }
    return (
        editButton ? (
            <div className="col-11 m-0 p-2 p-md-4 flex-fill d-flex justify-content-center align-items-start">
                <form>
                    <div className='m-0 p-0 row text-center d-flex justify-content-center'>
                        <h4 className='m-0 p-5 text-start col-5 '>Edit Details : </h4>
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
                        <Col className="btn m-0 p-0 col-2 w-auto px-3 py-1 mx-2 rounded-4 text-light" style={{ backgroundColor: '#5dcad4' }} onClick={handleSave}>Save</Col>
                        <Col className="btn m-0 p-0 col-2 w-auto bg-danger mx-2 px-3 py-1 rounded-4 text-light" onClick={handleCancel}>Cancel</Col>
                    </div>
                </form>
            </div>
        ) : (
            <div className="col-11 m-0 p-0 flex-fill">
                {
                    <div className="card-info">
                        <div className="row m-0 p-2 p-md-4">
                            <div className="row p-0 m-0">
                                <div className='col-12 m-0 p-0 pb-5'>
                                    <div className="row p-0 m-0 justify-content-end FirstRow flex-wrap">
                                        <TopRow name={'Jessica'} />
                                    </div>
                                    <div className="row p-0 py-2 pt-4 m-0 profile">
                                        <Col className="col-2 m-0 p-0 me-2 w-auto d-flex align-items-center"><Link to={'/patientlist'} className="text-decoration-none text-black">Patient Details</Link></Col>
                                        <Col className="col-1 ms-2 w-auto m-0 p-0 fs-3 d-flex align-items-center text-secondary">{'>'}</Col>
                                        <Col className="m-0 p-0 ms-3 fs-3 d-flex align-items-center">{data.id}</Col>
                                    </div>

                                    <div className="row p-0 py-2 m-0 patientActive">
                                        <div className='col-1 m-0 p-0 px-2 docimg'><img src={doc} className='igg' width={80} height={80}></img></div>
                                        <div className='col-5 m-0 p-0 px-2 d-flex flex-wrap'>
                                            <div className='col-12 m-0 p-0 name01 h-auto'>
                                                <div className="row m-0 p-0">
                                                    <div className="col-8 m-0 p-0 me-2 w-auto">{data.title}</div>
                                                    <div className="col-2 m-0 p-0"><span className='m-0 p-0 text-success fw-semibold' style={{ fontSize: "14px" }}>• Active</span></div>
                                                </div>
                                            </div>
                                            <div className='col-12 m-0 p-0 px-2 w-auto fw-semibold' style={{ backgroundColor: '#e9f5f7', borderRadius: "5px", height: "fit-content", color: "#5dcad4", fontSize: "12px" }}>{data.creationAt}</div>
                                            <div className='col-12 m-0 p-0 name02 h-auto fw-semibold'>{`consumption type : ${data.price}`}</div>
                                        </div>
                                        <div className='col py-2 py-sm-0 p-0 m-0 d-flex justify-content-end align-items-center pe-md-3 pe-2'>
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
                                        </div>
                                    </div>
                                    <div className="m-0 p-0 py-5 row d-flex  justify-content-end">
                                        <Col className="btn m-0 p-0 col-2 w-auto px-3 py-1 mx-2 rounded-4 text-light" style={{ backgroundColor: '#5dcad4' }} onClick={handleCancel}>Edit</Col>
                                        <Col className="btn m-0 p-0 col-2 w-auto px-3 py-1 mx-2 rounded-4 text-light border-danger border-2" onClick={handleDel}><img src={del} /></Col>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    //     )
                    // )
                }
            </div>)
    );
}

export default ViewPatientDetails;