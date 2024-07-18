import './Forms.css';
import edit from '../Assests/edit-text.png';
import dob from '../Assests/dob.png';
import { useState } from 'react';
import Save from './Submit';
import ActiveBar from '../ActiveBar/ActiveBar';
import TopRow from '../TopRow/TopRow';
import { ErrorMessage, Field, Form, Formik ,} from 'formik';
import * as Yup from 'yup';

const Forms = () => {
    const [inputFirstName, setinputFirstName] = useState('Jessica');
    const [inputLasttName, setinputLasttName] = useState('');
    const [inputMail, setinputMail] = useState('jessica@gmail.com');
    const [inputNumber, setinputNumber] = useState('');
    const [inputAddress, setinputAddress] = useState('');
    const [inputCity, setinputCity] = useState('');
    const [inputState, setinputState] = useState('');
    const [inputPostalCode, setinputPostalCode] = useState('');
    const [valueDisable, setvalueDisable] = useState(true);
    const [saveDisable, setSaveDisable] = useState(false);

    const handledisable = (value01, value02) => {
        setvalueDisable(!value01);
        setSaveDisable(!value02);
    }
    const handleFirstName = (event) => {
        setinputFirstName(event.target.value);
    }
    const handleLastName = (event) => {
        setinputLasttName(event.target.value);
    }
    const handleMail = (event) => {
        setinputMail(event.target.value);
    }
    const handleNumber = (event) => {
        setinputNumber(event.target.value);
    }
    const handleAddress = (event) => {
        setinputAddress(event.target.value);
    }
    const handleCity = (event) => {
        setinputCity(event.target.value);
    }
    const handleState = (event) => {
        setinputState(event.target.value);
    }
    const handlePostalCode = (event) => {
        setinputPostalCode(event.target.value);
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
                        firstName: '',
                        lastName: '',
                        email: '',
                        gender: '',
                        dob: '',
                        phoneNumber: '',
                        address: '',
                        city: '',
                        state: '',
                        postalCode: '',
                    }}
                    validationSchema={Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        lastName: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                        email: Yup.string().email('Invalid email address').required('Required'),
                    })}
                >
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
                                <Field name="firstName" className='col-12 m-0 w-100 h-auto p-2'  disabled={valueDisable} placeholder='First Name' type="text" />
                                {errors.name && touched.name ? (<div>{errors.name}</div>) : null}
                                <ErrorMessage name="lastName" />
                            </div>
                            <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                <label htmlFor="lastName" className='col-12 m-0 p-0 pb-2'>Last Name</label>
                                <Field name="lastName" className='col-12 m-0 w-100 h-auto p-2' disabled={valueDisable} placeholder='Last Name' type="text" />
                                <ErrorMessage name="lastName" />
                            </div>
                            <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                <label htmlFor="email" className='col-12 m-0 p-0 pb-2'>Email Address</label>
                                <Field name="email" className='col-12 m-0 w-100 h-auto p-2' disabled={valueDisable} placeholder='Email Address' type="email" />
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                <label htmlFor="gender" className='col-12 m-0 p-0 pb-2'>Gender</label>
                                <Field name="gender" className='m-0 col-12 gdiv d-flex align-items-center w-100  h-auto p-2' disabled={valueDisable} as='select'>
                                    <option value="Male">Male</option>
                                    <option value="Female" selected>Female</option>
                                    <option value="Others">Other</option>
                                </Field>
                                <ErrorMessage name="gender" />
                            </div>
                            <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                <label htmlFor="dob" className='col-12 m-0 p-0 pb-2'>DOB</label>
                                <Field name="dob" className='col-12 m-0 w-100 h-auto p-2' disabled={valueDisable} placeholder='Date-of-Birth' type="Date" />
                                <ErrorMessage name="dob" />
                            </div>
                            <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                <label htmlFor="phoneNumber" className='col-12 m-0 p-0 pb-2'>Phone Number</label>
                                <Field name="phoneNumber" className='col-12 m-0 w-100 h-auto p-2' disabled={valueDisable} placeholder='Phone Number' type="Number" />
                                <ErrorMessage name="phoneNumber" />
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                <label htmlFor="address" className='col-12 m-0 p-0 pb-2'>Address</label>
                                <Field name="address" className='col-12 m-0 w-100 h-auto p-2' disabled={valueDisable} placeholder='Address' type="text" />
                                <ErrorMessage name="address" />
                            </div>
                            <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                <label htmlFor="city" className='col-12 m-0 p-0 pb-2'>City</label>
                                <Field name="city" className='col-12 m-0 w-100 h-auto p-2' disabled={valueDisable} placeholder='City' type="text" />
                                <ErrorMessage name="city" />
                            </div>
                            <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                <label htmlFor="state" className='col-12 m-0 p-0 pb-2'>State</label>
                                <Field name="state" className='col-12 m-0 w-100 h-auto p-2' disabled={valueDisable} placeholder='State' type="text" />
                                <ErrorMessage name="state" />
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                                <label htmlFor="postalCode" className='col-12 m-0 p-0 pb-2'>Postal Code</label>
                                <Field name="postalCode" className='col-12 m-0 w-100  h-auto p-2' disabled={valueDisable} placeholder='Postal Code' type="Number" />
                                <ErrorMessage name="postalCode" />
                            </div>
                        </div>
                        {saveDisable ? <Save id='submitBtn' funct={handledisable} /> : null}
                    </Form>
                </Formik>
                {/* <forms className="m-0 p-0" id="formEle">
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
                        <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                            <label className='col-12 m-0 p-0 pb-2'>First Name</label>
                            <input type="text" className='col-12 m-0 w-100' disabled={valueDisable} placeholder='First Name' value={inputFirstName} onChange={handleFirstName}></input>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                            <label className='col-12 m-0 p-0 pb-2'>Last Name</label>
                            <input type="text" className='col-12 m-0 w-100' disabled={valueDisable} placeholder='Last Name' value={inputLasttName} onChange={handleLastName}></input>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                            <label className='col-12 m-0 p-0 pb-2'>Email Address</label>
                            <input type="email" className='col-12 m-0 w-100' disabled={valueDisable} placeholder='Email Address' value={inputMail} onChange={handleMail}></input>
                        </div>
                    </div>
                    <div className='row m-0 p-0'>
                        <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                            <label className='col-12 m-0 p-0 pb-2'>Gender</label>
                            <select className='m-0 col-12 m-0 gdiv d-flex align-items-center w-100' disabled={valueDisable}>
                                <option value="Male">Male</option>
                                <option value="Female" selected>Female</option>
                                <option value="Others">Other</option>
                            </select>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                            <label className='col-12 m-0 p-0 pb-2'>DOB</label>
                            <div className='col-12 m-0 p-0 gdiv d-flex align-items-center dob'>
                                <div className='row m-0 p-0 flex-fill justify-content-between w-100'>
                                    <input type=" text" className=' m-0 gender dobinput' disabled={valueDisable} placeholder='Dec 13, 1989' value=''></input>
                                    <div className='col-1 m-0 p-0 me-2'>
                                        <img src={dob} class=" m-0 p-0"
                                            width="20px" height="15px" alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                            <label className='col-12 m-0 p-0 pb-2'>Phone Number</label>
                            <input type="number" className='col-12 m-0 w-100' disabled={valueDisable} placeholder='Phone Number' value={inputNumber} onChange={handleNumber}></input>
                        </div>
                    </div>
                    <div className='row m-0 p-0'>
                        <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                            <label className='col-12 m-0 p-0 pb-2'>Address</label>
                            <input type=" text" className='col-12 m-0 w-100' disabled={valueDisable} placeholder='Address' value={inputAddress} onChange={handleAddress}></input>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                            <label className='col-12 m-0 p-0 pb-2'>City</label>
                            <input type=" text" className='col-12 m-0 w-100' disabled={valueDisable} placeholder='City' value={inputCity} onChange={handleCity}></input>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                            <label className='col-12 m-0 p-0 pb-2'>State</label>
                            <input type=" text" className='col-12 m-0 w-100' disabled={valueDisable} placeholder='State' value={inputState} onChange={handleState}></input>
                        </div>
                    </div>
                    <div className='row m-0 p-0'>
                        <div className='col-12 col-md-4 col-lg-4 m-0 p-2 py-3'>
                            <label className='col-12 m-0 p-0 pb-2'>Postal code</label>
                            <input type=" text" className='col-12 m-0 w-100' disabled={valueDisable} placeholder='Postal Code' value={inputPostalCode} onChange={handlePostalCode}></input>
                        </div>
                    </div>
                    {saveDisable ? <Save id='submitBtn' funct={handledisable} /> : null}
                </forms> */}
            </div>
        </div>
    );
};

export default Forms;
