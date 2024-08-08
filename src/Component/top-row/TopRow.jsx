import '../../css/TopRow.css';
import bell from '../../assests/bell.png';
import doc from '../../assests/jejeje-1.png';
import dropdown from '../../assests/dropdown_arrow.webp';
import logout from '../../assests/Frame 6.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, DropdownToggle, Row, Button } from 'react-bootstrap';
import password from '../../assests/password.jpg';
import profile from '../../assests/user.png';
import { useNavigate } from 'react-router-dom';

const DropdownFunc = (name, alt, label) => {
    const navigate = useNavigate();
    if (alt === 'Logout')
        return (
            <Dropdown.Item className='p-2 ps-1 m-0 dropItem'onClick={() => {
                console.log('click');
                sessionStorage.removeItem('token');
                navigate('/');
            }} >
                <Row className=' p-0 m-0 flex-nowrap' >
                    <Col className='col-2 m-0 ms-1 p-0'><img src={name} className='m-0 p-0' alt={alt} /></Col>
                    <Col className='col-10 m-0 p-0 ps-3 tt mt-1'>{label}</Col>
                </Row>
            </Dropdown.Item>
        );
    return (
        <Dropdown.Item href="" className='p-2 ps-1 m-0 dropItem' >
            <Row className=' p-0 m-0 flex-nowrap'>
                <Col className='col-2 m-0 ms-1 p-0'><img src={name} className='m-0 p-0' alt={alt} /></Col>
                <Col className='col-10 m-0 p-0 ps-3 tt mt-1'>{label}</Col>
            </Row>
        </Dropdown.Item>
    );
}

const TopRow = (props) => {
    return (
        <Row className="topB p-1 m-0 d-flex justify-content-end">
            <Row className='m-0 p-0 rw1'>
                <Col className="col-3 m-0 p-0 px-2 d-flex align-items-center">
                    <button className="btn p-1 px-2 m-0 rounded-5 bell w-auto">
                        <div className='d-inline-block position-relative m-0 p-0'>
                            <img src={bell} className='p-0 m-0' alt='Notification'>
                            </img>
                            <span className='badge position-absolute start-100 translate-middle rounded-pill m-0'>2</span>
                        </div>
                    </button>
                </Col>
                <Col className='col-1 m-0 p-0 vr'></Col>
                <Col className="col-7 m-0 p-0 flex-fill ps-2 align-items-center">
                    <Dropdown className='m-0 p-0 '>
                        <DropdownToggle variant='bg-light' className='m-0 p-0 w-100 dropdown'>
                            <Row className='m-0 p-0 d-flex justify-content-between'>
                                <Col className='col-10 m-0 p-0 d-flex justify-content-start'>
                                    <img src={doc} className='col-4 m-0 p-0 w-auto' alt='Profile'></img>
                                    <Col className='col-6 m-0 p-0'>
                                        <Col className='col-12 m-0 p-0 name1'>{props.name}</Col>
                                        <Col className='col-12 m-0 p-0 name2'>admin</Col>
                                    </Col>
                                </Col>
                                <Col className='col-1 p-0 m-0 text-center me-2'>
                                    <img src={dropdown} className="m-0 p-0"
                                        width="15px" height="15px" alt="" />
                                </Col>
                            </Row>
                        </DropdownToggle>
                        <Dropdown.Menu className='p-0 m-0 dmenu mt-3'>
                            {DropdownFunc(profile, 'Profile', 'My Profile')}
                            {DropdownFunc(password, 'Password', 'Change Password')}
                            {DropdownFunc(logout, 'Logout', 'Log out')}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Row>
    );
};

export default TopRow;