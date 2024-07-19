import './Forms.css';
import edit from '../Assests/edit-text.png';
import dob from '../Assests/dob.png';
import { useState } from 'react';
import Save from './Submit';
import ActiveBar from '../ActiveBar/ActiveBar';
import TopRow from '../TopRow/TopRow';
import { ErrorMessage, Field, Form, Formik, } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../MainColumn/CustomInput';

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
        <div className='col-12 m-0 p-0 pb-5'>
            <div className="row p-0 m-0 justify-content-end FirstRow flex-wrap">
                <TopRow name={inputFirstName} />
            </div>
            <div className="row p-0 py-2 pt-4 m-0 profile">Profile</div>
            <ActiveBar name={inputFirstName} mail={inputMail} />
            <div className='m-0 p-3 downBlock pb-5'>
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
                            <div className='row m-0 p-0'>
                                <div className='col-8 m-0 p-0 flex-grow-1 pDetails'>Personal Details</div>
                                <div className='col-4 m-0 p-0 text-end'>
                                    <button className='m-0 p-0 btn editBtn' onClick={() => {
                                        handledisable(true, false);
                                    }}>
                                        <div className='row m-0 p-0 justify-content-between'>
                                            <div className='col-1 m-0 p-0 px-1 edit'><img src={edit} className='m-0 p-0' /></div>
                                            <div className='col-1 m-0 p-0 px-1 edit'>Edit</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='row m-0 p-0'>
                                <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                    <label htmlFor="firstName" className='col-12 m-0 p-0 pb-2'>First Name</label>
                                    <Field name="firstName" className={`col-12 m-0 w-100 h-auto p-2 ${errors.firstName && touched.firstName ? 'input-error' : ''}`} disabled={valueDisable} placeholder='First Name' type="text" />
                                    <ErrorMessage name="firstName" component="div" className="error-message" />
                                </div>
                                <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                    <label htmlFor="lastName" className='col-12 m-0 p-0 pb-2'>Last Name</label>
                                    <Field name="lastName" className={`col-12 m-0 w-100 h-auto p-2 ${errors.lastName && touched.lastName ? 'input-error' : ''}`} disabled={valueDisable} placeholder='Last Name' type="text" />
                                    <ErrorMessage name="lastName" component="div" className="error-message" />
                                </div>
                                <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                    <label htmlFor="email" className='col-12 m-0 p-0 pb-2'>Email Address</label>
                                    <Field name="email" className={`col-12 m-0 w-100 h-auto p-2 ${errors.email && touched.email ? 'input-error' : ''}`} disabled={valueDisable} placeholder='Email Address' type="email" />
                                    <ErrorMessage name="email" component="div" className="error-message" />
                                </div>
                            </div>
                            <div className='row m-0 p-0'>
                                <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                    <label htmlFor="gender" className='col-12 m-0 p-0 pb-2'>Gender</label>
                                    <Field name="gender" className={`m-0 col-12 gdiv d-flex align-items-center w-100  h-auto p-2 ${errors.gender && touched.gender ? 'input-error' : ''}`} disabled={valueDisable} as='select'>
                                        <option >Please choose the gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Other</option>
                                    </Field>
                                    <ErrorMessage name="gender" component="div" className="error-message" />
                                </div>
                                <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                    <label htmlFor="dob" className='col-12 m-0 p-0 pb-2'>DOB</label>
                                    <Field name="dob" className={`col-12 m-0 w-100 h-auto p-2 ${errors.dob && touched.dob ? 'input-error' : ''}`} disabled={valueDisable} placeholder='Date-of-Birth' type="Date" />
                                    <ErrorMessage name="dob" component="div" className="error-message" />
                                </div>
                                <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                    <label htmlFor="phoneNumber" className='col-12 m-0 p-0 pb-2'>Phone Number</label>
                                    <Field name="phoneNumber" className={`col-12 m-0 w-100 h-auto p-2 ${errors.phoneNumber && touched.phoneNumber ? 'input-error' : ''}`} disabled={valueDisable} placeholder='Phone Number' type="Number" />
                                    <ErrorMessage name="phoneNumber" component="div" className="error-message" />
                                </div>
                            </div>
                            <div className='row m-0 p-0'>
                                <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                    <label htmlFor="address" className='col-12 m-0 p-0 pb-2'>Address</label>
                                    <Field name="address" className={`col-12 m-0 w-100 h-auto p-2 ${errors.address && touched.address ? 'input-error' : ''}`} disabled={valueDisable} placeholder='Address' type="text" />
                                    <ErrorMessage name="address" component="div" className="error-message" />
                                </div>
                                <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                    <label htmlFor="city" className='col-12 m-0 p-0 pb-2'>City</label>
                                    <Field name="city" className={`col-12 m-0 w-100 h-auto p-2 ${errors.city && touched.city ? 'input-error' : ''}`} disabled={valueDisable} placeholder='City' type="text" />
                                    <ErrorMessage name="city" component="div" className="error-message" />
                                </div>
                                <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                    <label htmlFor="state" className='col-12 m-0 p-0 pb-2'>State</label>
                                    <Field name="state" className={`col-12 m-0 w-100 h-auto p-2 ${errors.state && touched.state ? 'input-error' : ''}`} disabled={valueDisable} placeholder='State' type="text" />
                                    <ErrorMessage name="state" component="div" className="error-message" />
                                </div>
                            </div>
                            <div className='row m-0 p-0'>
                                <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                    <label htmlFor="postalCode" className='col-12 m-0 p-0 pb-2'>Postal Code</label>
                                    <Field name="postalCode" className={`col-12 m-0 w-100 h-auto p-2 ${errors.postalCode && touched.postalCode ? 'input-error' : ''}`} disabled={valueDisable} placeholder='Postal Code' type="Number" />
                                    <ErrorMessage name="postalCode" component="div" className="error-message" />
                                </div>
                            </div>
                            {saveDisable ? <Save id='submitBtn' funct={handledisable} /> : null}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Forms;
