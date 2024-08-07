import Swal from "sweetalert2";
import DetailsRow from "../MainColumn/DetailsRow";
import del from '../../Assests/delete (1).png';
import '../../Css/EditColumn.css';
import '../../Css/ViewPatientDetails.css';
import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import CreateColumn from "../../Component/Table/CreateColumn";
import { useDeleteDatabyIdMutation, useGetDataByIdQuery, useUpdateDatabyIdMutation } from "../../Redux/reducers/apiSlice";

const ViewPatientDetails = () => {
    const [count, setCount] = useState(0);
    const { patientId } = useParams();
    const { refetch } = useGetDataByIdQuery(patientId);
    const [updateData] = useUpdateDatabyIdMutation();
    const [deleteData] = useDeleteDatabyIdMutation();
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
            await deleteData(patientId);
            navigate('/patientlist');
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }

    const handleSave = async (values) => {
        const payload = {
            ...values,
            description: 'Hi there',
            categoryId: 1,
            images: ["https://example.com/product-image.jpg"]
        };
        try {
            const response = await updateData({ id: patientId, ...payload });
            setData(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        refetch()
            .then(response => {
                const fetchedData = response.data || {};
                setData(fetchedData);
                setFormData({
                    title: fetchedData.title || '',
                    creationAt: fetchedData.creationAt || '',
                    price: fetchedData.price || ''
                });
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, [patientId, refetch]);

    const handleInputChange = (e) => {
        setCount(count + 1);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handlePre = (e) => {
        setFormData({
            ...formData,
            title: '',
            price: 0,
            creationAt: '',
        });
    };

    const patient = (data.id == patientId);
    return (
        loading ?
            (
                <Col className="m-0 p-0 col-11 flex-fill position-relative d-flex align-items-center justify-content-center">
                    <div className="spinner-border themeColor" />
                </Col>
            ) : (patient ? (
                <Col className="m-0 p-0 col-11 flex-fill position-relative">
                    <div className="card-info m-0 p-0 vh-100">
                        <Row className="m-0 p-2 p-md-4 vh-100">
                            <Row className="p-0 m-0">
                                <Col className='col-12 m-0 p-0 pb-5'>
                                    <DetailsRow value={data} />
                                    <Row className="m-0 p-0 py-5 d-flex  justify-content-end">
                                        <Col className="btn m-0 p-0 col-2 w-auto px-3 py-1 mx-2 rounded-4 d-flex align-items-center text-light btnSub" onClick={handleCancel}>Edit</Col>
                                        <Col className="btn m-0 p-0 col-2 w-auto px-3 py-1 mx-2 rounded-4 text-light border-danger d-flex align-items-center border-2" onClick={handleDel}><img src={del} alt="delete" /></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Row>
                    </div>
                    {editButton ?
                        <CreateColumn setCount={setCount} count={count} header={'Update Details : '} buttonName={'Update'} column={'edit'}
                            offFunc={setEditbutton} displayOn={editButton} setFromData={setFormData} formData={formData}
                            handleInputChange={handleInputChange} handleCreate={handleSave} handlePre={handlePre} />
                        : null}
                </Col>) : <Col className="col-11 m-0 p-0 flex-fill ps-5 pt-5 fs-3 fw-semibold">Patient not found</Col>)
    );
}
export default ViewPatientDetails;



// const fetchItem = async () => {
// try {
//     const response = await getProductsById(patientId);
//     setData(response.data);
//     setFormData({                                              For Future Ref
//         title: response.data.title,
//         creationAt: response.data.creationAt,
//         price: response.data.price
//     });
//     setLoading(false);
// } 