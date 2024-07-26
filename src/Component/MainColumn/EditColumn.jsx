import * as Yup from 'yup';
import { Button, Col, Row } from "react-bootstrap";
import { Cancel} from "./SweetFires";
import { ErrorMessage, Field, Form, Formik } from "formik";

const EditColumn = ({ setFromData, initialValues, handleChange, Submit, header, column, buttonName, handleDisplay, count, setCount }) => {

    return (
        <Col className="col-12 m-0 p-2 p-md-4 flex-fill d-flex justify-content-center align-items-center position-absolute overlay"
            style={{ top: '0', left: '0', zIndex: '1000' }}>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object({
                    title: Yup.string().required('Required'),
                    price: Yup.number().required('Required'),
                })}
                onSubmit={(values) => {
                    setFromData({
                        ...values,
                        description: 'Hi there',
                        categoryId: 1,
                        images: ["https://example.com/product-image.jpg"]
                    });
                    Submit(values);
                }}
            >
                {({ errors, touched, setFieldValue, values }) => (
                    <Form className="m-0 rounded-4 bg-white p-3 p-md-5">
                        <h4 className='m-0 p-0 text-start col-12 flex-fill'>{header}</h4>
                        <Col className='m-0 p-0 py-2 col-12 '>
                            <Row className="m-0 p-0 ">
                                <Col className="col-sm-6 m-0 p-0 d-flex justify-content-end">
                                    <label className='m-0 p-0 fs-5 fw-semibold' style={{ width: '200px' }} htmlFor='title'>Treatment Name : </label>
                                </Col>
                                <Col className="col-sm-6m-0 p-0">
                                    <Field className={`p-2 m-0 h-auto ${errors.title && touched.title ? 'input-error' : ''}`}
                                        onChange={(e) => handleChange(e, setFieldValue)} name="title" />
                                    <ErrorMessage name='title' component="div" className="error-message" />
                                </Col>
                            </Row>
                        </Col>
                        <Col className='m-0 p-0 py-2 col-12'>
                            <Row className="m-0 p-0">
                                <Col className="col-sm-6 m-0 p-0 d-flex justify-content-end">
                                    <label className='m-0 p-0 fs-5 fw-semibold' style={{ width: '200px' }} htmlFor='price'>Consumption Type : </label>
                                </Col>
                                <Col className="col-sm-6 m-0 p-0">
                                    <Field className={`p-2 m-0 h-auto ${errors.price && touched.price ? 'input-error' : ''}`}
                                        onChange={(e) => handleChange(e, setFieldValue)} type="Number" name="price" />
                                    <ErrorMessage name='price' component="div" className="error-message" />
                                </Col>
                            </Row>
                        </Col>
                        <Row className='m-0 p-0 d-flex justify-content-end mt-3'>
                            <Button className=" m-0 p-0 col-2 w-auto px-3 py-1 mx-2 rounded-4 text-light" type='submit'
                                style={{ backgroundColor: '#5dcad4', border: 'none' }} >{buttonName}</Button>
                            <Col className="btn m-0 p-0 col-2 w-auto border-danger mx-2 px-3 py-1 rounded-4 text-danger border-2 fw-bold" onClick={() => {
                                handleDisplay();
                                Cancel();
                            }}>Cancel</Col>
                        </Row>
                    </Form >)}
            </Formik>
        </Col >
    );
}

export default EditColumn;