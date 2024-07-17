import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assests/frame_small.png';
import '../MainColumn/Login.css';

const Login = () => {
    const [login, setLogin] = useState(true);
    const handleLogin = () => {
        setLogin(!login);
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
                    <form className="m-0 p-0 col-10 loginForm">
                        <div className='m-0 p-0 row text-center d-flex justify-content-center'>
                            <div className='m-0 p-0 pt-4 pb-2'>
                                <img className='m-0 p-0 logoLogin' src={Logo} />
                            </div>
                            <h4 className='m-0 p-4 px-3 pb-5 text-start fs-4 flex-fill text-center'>Log In</h4>
                            <div className='m-0 p-3 py-2 pt-4 col-8 flex-grow-1 flex-sm-grow-0'>
                                <div className="row m-0 p-0 flex-wrap">
                                    <label className='col-xl-4 m-0 p-0 fw-semibold fs-5 text-start pe-2' for='userId'>E-mail / Id : </label>
                                    <input className='col-xl-8 p-2 m-0 w-50 flex-fill' name="userId"></input>
                                </div>
                            </div>
                            <div className='m-0 p-3 py-2 col-8 flex-grow-1 flex-sm-grow-0'>
                                <div className="row m-0 p-0">
                                    <label className='col-xl-4 m-0 p-0 fw-semibold fs-5 text-start pe-2' for='password'>Password : </label>
                                    <input className='col-xl-8 p-2 m-0 w-50 flex-fill' name="password" ></input>
                                </div>
                            </div>
                            <div className='m-0 p-0 pe-3 text-end col-8 flex-grow-1 flex-sm-grow-0' style={{fontSize:'12px'}}><Link className='m-0 p-0 text-decoration-none text-primary'>Forgot Password?</Link></div>
                        </div>
                        <div className='m-0 pt-5 row d-flex justify-content-center'>
                            <Col className="col-12 btn m-0 p-0 px-3 py-2 mx-2 rounded text-light" style={{ backgroundColor: '#5dcad4',width:'63%' }} onClick={handleLogin}><Link className='m-0 p-0 text-decoration-none text-light' to='/profile'>Login</Link></Col>
                        </div>
                        <div className='m-0 p-0 pe-2 pe-sm-3 text-end justify-content-end col-10' style={{fontSize:'12px'}}>Don't have an account? <Link className='m-0 p-0 w-auto text-decoration-none text-primary'>Sign up</Link></div>
                    </form>
                </Col>
            </Row >
        ) : null
    );
}


export default Login;