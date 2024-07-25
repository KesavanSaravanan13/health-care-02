import SideIcon from './SideIcon';
import '../MainColumn/SideBar.css';
import Logo from '../Assests/frame_small.png';
import icon1 from '../Assests/Frame 15.png';
import icon2 from '../Assests/Frame 16.png';
import icon3 from '../Assests/Frame 13.png';
import icon4 from '../Assests/Frame 9.png';
import icon5 from '../Assests/Frame 8.png';
import icon6 from '../Assests/Frame 14.png';
import icon7 from '../Assests/Frame 10.png';
import logout from '../Assests/Frame 6.png';
import { Link, Navigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { LoginPrivateRoutes } from './PrivateRoutes';

const Sidebar = () => {
  return (
    <Col className='col-1 m-0 p-0 justify-content-center sidebar'>
      <ul className='m-0 p-0 d-flex justify-content-center flex-wrap sticky-top bottom-0 left-0 vh-100'>
        <Row className='m-0 p-0 align-items-start h-50'>
          <li className='m-0 p-0'><LoGo/></li>
          <li className='m-0 p-0'><Link to='/profile'><Icon1 /></Link></li>
          <li className='m-0 p-0'><Link to='/dashboard'><Icon2 /></Link></li>
          <li className='m-0 p-0'><Link to='/patientlist'><Icon3 /></Link></li>
          <li className='m-0 p-0'><Link to='/providers'><Icon4 /></Link></li>
          <li className='m-0 p-0'><Link to='/clicnicaltrails'><Icon5 /></Link></li>
          <li className='m-0 p-0'><Link to='/paitentcarereport'><Icon6 /></Link></li>
          <li className='m-0 p-0'><Link to='/messagecenter'><Icon7 /></Link></li>
        </Row>
        <li className='m-0 p-0 position-absolute bottom-0'><Link to='/' onClick={()=>{
          sessionStorage.removeItem('token');
        }}><Logout /></Link></li>
      </ul>
    </Col>
  );
}
const LoGo = () => {
  return <SideIcon ic={Logo} alt={'Logo'} />;
}
const Icon1 = () => {
  return <SideIcon ic={icon1} alt={'Icon1'} />;
}
const Icon2 = () => {
  return <SideIcon ic={icon2} alt={'Icon2'} />;
}
const Icon3 = () => {
  return <SideIcon ic={icon3} alt={'Icon3'} />;
}
const Icon4 = () => {
  return <SideIcon ic={icon4} alt={'Icon4'} />;
}
const Icon5 = () => {
  return <SideIcon ic={icon5} alt={'Icon5'} />;
}
const Icon6 = () => {
  return <SideIcon ic={icon6} alt={'Icon6'} />;
}
const Icon7 = () => {
  return <SideIcon ic={icon7} alt={'Icon7'} />;
}
const Logout = () => {
  return (
    <Row className='row m-0 p-0 icon flex-fill'>
      <SideIcon ic={logout} alt={'LogOut'} />
    </Row>
  );
}
export default Sidebar;