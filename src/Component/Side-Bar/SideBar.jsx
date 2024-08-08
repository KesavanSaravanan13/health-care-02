import SideIcon from './SideIcon';
import '../../css/SideBar.css';
import Logo from '../../assests/frame_small.png';
import icon1 from '../../assests/Frame 15.png';
import icon2 from '../../assests/Frame 17.png';
import icon3 from '../../assests/Frame 13.png';
import icon4 from '../../assests/Frame 9.png';
import icon5 from '../../assests/Frame 8.png';
import icon6 from '../../assests/Frame 14.png';
import icon7 from '../../assests/Frame 10.png';
import icon0 from '../../assests/Frame 24.png';
import icon05 from '../../assests/Frame 25.png';
import icon04 from '../../assests/Frame 26.png';
import icon07 from '../../assests/Frame 27.png';
import icon03 from '../../assests/Frame 28.png';
import icon06 from '../../assests/Frame 29.png';
import icon02 from '../../assests/Frame 16.png';
import icon01 from '../../assests/Frame 30.png';
import logout from '../../assests/Frame 24.png';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const Sidebar = (props) => {
  return (
    <Col className='col-1 m-0 p-0 justify-content-center sidebar'>
      <ul className='m-0 p-0 d-flex justify-content-center flex-wrap sticky-top bottom-0 left-0 vh-100'>
        <Row className='m-0 p-0 align-items-start h-50'>
          <li className='m-0 p-0'><LoGo /></li>
          <li className='m-0 p-0'><Link to='/profile'>{
            props.value === 'profile' ? <Icon01 /> : <Icon1 />
          }</Link></li>
          <li className='m-0 p-0'><Link to='/dashboard'>{
            props.value === 'Dashboard' ? <Icon02 /> : <Icon2 />
          }</Link></li>
          <li className='m-0 p-0'><Link to='/patientlist'>{
            ((props.value === 'ViewPatientDetails') || (props.value === 'PatientList')) ? <Icon03 /> : <Icon3 />
          }</Link></li>
          <li className='m-0 p-0'><Link to='/providers'>{
            props.value === 'Providers' ? <Icon04 /> : <Icon4 />
          }</Link></li>
          <li className='m-0 p-0'><Link to='/clicnicaltrails'>{
            props.value === 'ClinicalTrails' ? <Icon05 /> : <Icon5 />
          }</Link></li>
          <li className='m-0 p-0'><Link to='/paitentcarereport'>{
            props.value === 'PatientCareReport' ? <Icon06 /> : <Icon6 />
          }</Link></li>
          <li className='m-0 p-0'><Link to='/messagecenter'>{
            props.value === 'MessageCenter' ? <Icon07 /> : <Icon7 />
          }</Link></li>
        </Row>
        <li className='m-0 p-0 position-absolute bottom-0'><Link to='/' onClick={() => {
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
const Icon01 = () => {
  return <SideIcon ic={icon01} alt={'Icon1'} />;
}
const Icon02 = () => {
  return <SideIcon ic={icon02} alt={'Icon2'} />;
}
const Icon03 = () => {
  return <SideIcon ic={icon03} alt={'Icon3'} />;
}
const Icon04 = () => {
  return <SideIcon ic={icon04} alt={'Icon4'} />;
}
const Icon05 = () => {
  return <SideIcon ic={icon05} alt={'Icon5'} />;
}
const Icon06 = () => {
  return <SideIcon ic={icon06} alt={'Icon6'} />;
}
const Icon07 = () => {
  return <SideIcon ic={icon07} alt={'Icon7'} />;
}
const Logout = () => {
  return (
    <Row className='row m-0 p-0 icon flex-fill'>
      <SideIcon ic={logout} alt={'LogOut'} />
    </Row>
  );
}
export default Sidebar;