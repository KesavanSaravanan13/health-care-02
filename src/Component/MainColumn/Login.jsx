import * as Yup from 'yup';
import '../MainColumn/Login.css';
import LoginField from './LoginField';
import Logo from '../Assests/frame_small.png';
import { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { InvalidUser, validUser } from './SweetFires';

const Login = () => {
    const [login, setLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
                email: values.email,
                password: values.password
            });
            if (response.data.access_token) {
                sessionStorage.setItem('token', response.data.access_token);
                setLogin(!login);
                validUser();
                navigate('/profile');
            }
        } catch (err) {
            console.error('Login error:', err.response ? err.response.data : err.message);
            InvalidUser();
        }
    };

    return (
        login ? (
            <Row className='m-0 p-0  vh-100 loginRow'>
                <Col className='m-0 p-0 col-12 col-md-6 d-flex justify-content-center align-items-center'>
                    <Row className='m-0 p-2 w-75 py-sm-5 sideRow rounded'>
                        <Col className='m-0 p-0 col-12 text-center'>
                            <img className='m-0 p-0 logoLogin' src={Logo} alt='Logo' />
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
                            handleSubmit(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className="m-0 p-0 col-10 loginForm">
                                <Row className='m-0 p-0 text-center d-flex justify-content-center'>
                                    <Col className='m-0 p-0 pt-4 pb-2'>
                                        <img className='m-0 p-0 logoLogin' src={Logo} alt='Logo' />
                                    </Col>
                                    <h4 className='m-0 p-4 px-3 pb-5 text-start fs-4 flex-fill text-center'>Log In</h4>
                                    <LoginField errors={errors} touched={touched} />
                                    <Col className='m-0 p-0 pe-3 text-end col-8 flex-grow-1 flex-sm-grow-0' style={{ fontSize: '12px' }}><Link className='m-0 p-0 text-decoration-none text-primary'>Forgot Password?</Link></Col>
                                    <Row className='m-0 pt-5 d-flex justify-content-center'>
                                        <button type={'submit'} className="m-0 p-0 px-4 py-2 rounded text-light" style={{ backgroundColor: '#5dcad4', width: '63%', }} >Login</button>
                                    </Row>
                                    <Col className='m-0 p-0 pe-2 pe-sm-3 text-end justify-content-end col-8' style={{ fontSize: '12px' }}>Don't have an account? <Link className='m-0 p-0 w-auto text-decoration-none text-primary'>Sign up</Link></Col>
                                </Row>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row >
        ) : null
    );
}
export default Login;