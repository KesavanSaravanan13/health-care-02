import '../TopRow/TopRow.css';
import bell from '../Assests/bell.png';
import doc from '../Assests/jejeje-1.png';
import dropdown from '../Assests/dropdown_arrow.webp';
import logout from '../Assests/Frame 6.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, DropdownToggle, Row } from 'react-bootstrap';
import password from '../Assests/password.jpg';
import profile from '../Assests/user.png';

const dropdownFunc = (name, alt, label) => {
    return (
        <Dropdown.Item href="" className='p-2 ps-1 m-0'>
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
                            {dropdownFunc(profile, 'Profile', 'My Profile')}
                            {dropdownFunc(password, 'Password', 'Change Password')}
                            {dropdownFunc(logout, 'Logout', 'Log out')}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Row>
    );
};

export default TopRow;