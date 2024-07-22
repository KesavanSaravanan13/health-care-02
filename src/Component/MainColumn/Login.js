import * as Yup from 'yup';
import '../MainColumn/Login.css';
import LoginField from './LoginField';
import Logo from '../Assests/frame_small.png';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = useState(true);
    const navigate = useNavigate();
    const handleLogin = () => {
        setLogin(!login);
        navigate('/profile');
    }

    return (
        login ? (
            <Row className='m-0 p-0  vh-100 loginRow'>
                <Col className='m-0 p-0 col-12 col-md-6 d-flex justify-content-center align-items-center'>
                    <Row className='m-0 p-2 w-75 py-sm-5 sideRow rounded'>
                        <Col className='m-0 p-0 col-12 text-center'>
                            <img className='m-0 p-0 logoLogin' src={Logo} />
                        </Col>
                        <Col className='m-0 p-0 col-12 fs-2 fw-semibold text-light text-center'>
                            "Empowering Healthcare Proffessionals"
                        </Col>
                        <Col className='m-0 p-0 fs-5 col-12 text-light  text-center'>
                            Empowering Healthcare Proffessionals to deliver exceptional care while enhancing patient outcomes
                        </Col>
                    </Row>
                </Col>
                <Col className='col-12 col-md-6 m-0 p-0 d-flex justify-content-center justify-content-sm-end align-items-center loginCol'>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string().email('Invalid email address').required('Required'),
                            password: Yup.string()
                                .required('No password provided.')
                                .min(8, 'Password is too short - should be 8 chars minimum.')
                                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
                        })}
                        onSubmit={values => {
                            handleLogin();
                        }
                        }
                    >
                        {({ errors, touched }) => (
                            <Form className="m-0 p-0 col-10 loginForm">
                                <Row className='m-0 p-0 text-center d-flex justify-content-center'>
                                    <Col className='m-0 p-0 pt-4 pb-2'>
                                        <img className='m-0 p-0 logoLogin' src={Logo} />
                                    </Col>
                                    <h4 className='m-0 p-4 px-3 pb-5 text-start fs-4 flex-fill text-center'>Log In</h4>
<<<<<<< HEAD
                                    <div className='m-0 p-3 py-2 pt-4 col-8 flex-grow-1 flex-sm-grow-0'>
                                        <div className="row m-0 p-0 flex-wrap">
                                            <label htmlFor='email' className='col-xl-4 m-0 p-0 fw-semibold fs-5 text-start pe-2' >E-mail / Id : </label>
                                            <Field name='email' className={`col-xl-8 p-2 m-0 w-50 flex-fill ${errors.email && touched.email ? 'input-error' : ''} `}></Field>
                                            <ErrorMessage name="email" component="div" className="error-message" />
                                        </div>
                                    </div>
                                    <div className='m-0 p-3 py-2 col-8 flex-grow-1 flex-sm-grow-0'>
                                        <div className="row m-0 p-0">
                                            <label htmlFor='password' className='col-xl-4 m-0 p-0 fw-semibold fs-5 text-start pe-2' >Password : </label>
                                            <Field name='password' type='password' className={`col-xl-8 p-2 m-0 w-50 flex-fill ${errors.password && touched.password ? 'input-error' : ''} `} ></Field>
                                            <ErrorMessage name="password" component="div" className="error-message" />
                                        </div>
                                    </div>
                                    <div className='m-0 p-0 pe-3 text-end col-8 flex-grow-1 flex-sm-grow-0' style={{ fontSize: '12px' }}><Link className='m-0 p-0 text-decoration-none text-primary'>Forgot Password?</Link></div>
                                </div>
                                <div className='m-0 pt-5 row d-flex justify-content-center'>
                                    <button type={'submit'} className="m-0 p-0 px-3 py-2 mx-2 rounded text-light" style={{ backgroundColor: '#5dcad4', width: '63%', }} >Login</button>
                                </div>
                                <div className='m-0 p-0 pe-2 pe-sm-3 text-end justify-content-end col-10' style={{ fontSize: '12px' }} >Don't have an account? <Link className='m-0 p-0 w-auto text-decoration-none text-primary'>Sign up</Link></div>

=======
                                    <LoginField errors={errors} touched={touched} />
                                    <Col className='m-0 p-0 pe-3 text-end col-8 flex-grow-1 flex-sm-grow-0' style={{ fontSize: '12px' }}><Link className='m-0 p-0 text-decoration-none text-primary'>Forgot Password?</Link></Col>
                                </Row>
                                <Row className='m-0 pt-5 d-flex justify-content-center'>
                                    <Col className="col-12 btn m-0 p-0 px-3 py-2 mx-2 rounded text-light" style={{ backgroundColor: '#5dcad4', width: '63%' }} onClick={handleLogin}>Login</Col>
                                </Row>
                                <Col className='m-0 p-0 pe-2 pe-sm-3 text-end justify-content-end col-10' style={{ fontSize: '12px' }}>Don't have an account? <Link className='m-0 p-0 w-auto text-decoration-none text-primary'>Sign up</Link></Col>
>>>>>>> 286d2bfd66b847239b9f91274d566bf99b9cc6dd
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row >
        ) : null
    );
}
export default Login;