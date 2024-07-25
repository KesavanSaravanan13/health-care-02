import { Col, Row } from "react-bootstrap";
import { Cancel, Success } from "./SweetFires";

const EditColumn = ({formData, handleInputChange, handleSave, setEditbutton, handleCancel, count, setCount}) => {
    return(
        <Col className="col-12 m-0 p-2 p-md-4 flex-fill d-flex justify-content-center align-items-center position-absolute overlay" style={{ top: '0', left: '0', zIndex: '1000' }}>
                    <form className="m-0 rounded-4 bg-white p-3 p-md-5">
                        <h4 className='m-0 p-0 text-start col-12 flex-fill'>Edit Details : </h4>
                        <Col className='m-0 p-0 py-2 col-12 '>
                            <Row className="m-0 p-0 ">
                                <Col className="col-sm-6 m-0 p-0 d-flex justify-content-end">
                                    <label className='m-0 p-0 fs-5 fw-semibold' style={{ width: '200px' }} htmlFor='title'>Treatment Name : </label>
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
                                    setCount(0)
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
                </Col >
    );
}

export default EditColumn;