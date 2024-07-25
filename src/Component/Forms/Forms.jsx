import './Forms.css';
import * as Yup from 'yup';
import Update from './Submit';
import FieldForForm from './Field';
import TopRow from '../TopRow/TopRow';
import edit from '../Assests/edit-text.png';
import ActiveBar from '../ActiveBar/ActiveBar';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Form, Formik, } from 'formik';

const Forms = () => {
    const [inputFirstName, setinputFirstName] = useState('Jessica');
    const [inputMail, setinputMail] = useState('jessica@gmail.com');
    const [valueDisable, setvalueDisable] = useState(true);
    const [saveDisable, setSaveDisable] = useState(false);
    const handledisable = (value01, value02) => {
        setvalueDisable(!value01);
        setSaveDisable(!value02);
    }
    return (
        <Col className='col-12 m-0 p-0 pb-5'>
            <Row className="p-0 m-0 justify-content-end FirstRow flex-wrap">
                <TopRow name={inputFirstName} />
            </Row>
            <Row className="p-0 py-2 pt-4 m-0 profile">Profile</Row>
            <ActiveBar name={inputFirstName} mail={inputMail} />
            <Row className='m-0 p-3 downBlock pb-5'>
                <Formik
                    initialValues={{
                        firstName: 'Taylor',
                        lastName: 'Swift',
                        email: 'reputation13@gmail.com',
                        gender: 'Female',
                        dob: new Date('1989-12-13').toDateString(),
                        phoneNumber: '1313131313',
                        address: '13th street , T.Poets Department.',
                        city: 'Nashvile',
                        state: 'New york',
                        postalCode: '131313',
                    }}
                    validationSchema={Yup.object({
                        firstName: Yup.string().required('Required'),
                        lastName: Yup.string().required('Required'),
                        email: Yup.string().email('Invalid email address').required('Required'),
                        gender: Yup.string()
                            .oneOf(
                                ['Male', 'Female', 'Other'],
                                'Invalid Job Type'
                            )
                            .required('Required'),
                        dob: Yup.date().required('Required'),
                        phoneNumber: Yup.number().min(10, 'Phone Number Must be 10 digit').required('Required'),
                        address: Yup.string().required('Required'),
                        city: Yup.string().required('Required'),
                        state: Yup.string().required('Required'),
                        postalCode: Yup.number().min(6, 'Postal Code must be atleast 6 digit').required('Required'),
                    })}
                >
                    {({ errors, touched }) => (
                        <Form className="m-0 p-0 col-12" id="formEle">
                            <Row className='m-0 p-0'>
                                <Col className='col-8 m-0 p-0 flex-grow-1 pDetails'>Personal Details</Col>
                                <Col className='col-4 m-0 p-0 text-end'>
                                    <Button className='m-0 p-0 btn editBtn bg-white' disabled={saveDisable} onClick={() => {
                                        handledisable(true, false);
                                    }}>
                                        <Row className='row m-0 p-0 justify-content-between'>
                                            <Col className='col-1 m-0 p-0 px-1 edit'><img src={edit} className='m-0 p-0' alt='edit' /></Col>
                                            <Col className='col-1 m-0 p-0 px-1 edit'>Edit</Col>
                                        </Row>
                                    </Button>
                                </Col>
                            </Row>
                            <FieldForForm errors={errors} touched={touched} valueDisable={valueDisable} />
                            <Row className='m-0 p-0 justify-content-end' >
                                {saveDisable ? <Update id='submitBtn' value={'Cancel'} funct={handledisable} /> : null}
                                {saveDisable ? <Update id='submitBtn' value={'Update'} funct={handledisable} /> : null}

                            </Row>
                        </Form>
                    )}
                </Formik>
            </Row>
        </Col >
    );
};

export default Forms;
