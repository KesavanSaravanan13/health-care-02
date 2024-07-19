import '../MainColumn/SideBar.css';
import { Link } from 'react-router-dom';
import Logo from '../Assests/frame_small.png';
import icon1 from '../Assests/Frame 15.png';
import icon2 from '../Assests/Frame 16.png';
import icon3 from '../Assests/Frame 13.png';
import icon4 from '../Assests/Frame 9.png';
import icon5 from '../Assests/Frame 8.png';
import icon6 from '../Assests/Frame 14.png';
import icon7 from '../Assests/Frame 10.png';
import logout from '../Assests/Frame 6.png';

const Sidebar = () => {
    return (
        <div className='col-1 m-0 p-0 justify-content-center sidebar'>
            <ul className='m-0 p-0 d-flex justify-content-center flex-wrap sticky-top bottom-0 left-0 vh-100'>
                <div className='m-0 p-0'>
                    <li className='m-0 p-0'><Link to='/'><LoGo /></Link></li>
                    <li className='m-0 p-0'><Link to='/profile'><Icon1 /></Link></li>
                    <li className='m-0 p-0'><Link to='/dashboard'><Icon2 /></Link></li>
                    <li className='m-0 p-0'><Link to='/patientlist'><Icon3 /></Link></li>
                    <li className='m-0 p-0'><Link to='/providers'><Icon4 /></Link></li>
                    <li className='m-0 p-0'><Link to='/clicnicaltrails'><Icon5 /></Link></li>
                    <li className='m-0 p-0'><Link to='/paitentcarereport'><Icon6 /></Link></li>
                    <li className='m-0 p-0'><Link to='/messagecenter'><Icon7 /></Link></li>
                </div>
                <li className='m-0 p-0 position-absolute bottom-0'><Link to='/logout'><Logout /></Link></li>
            </ul>
        </div>
    );
}

const LoGo = () => {
    return (
      <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill z-0" >
          <img src={Logo} alt="Logo"></img>
      </div>
    );
  }
  const Icon1 = () => {
    return (
      <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" >
          <img src={icon1} className='p-3 icon1' alt="Icon1"></img>
      </div>
    );
  }
  const Icon2 = () => {
    return (
      <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><img src={icon2} className='p-2' alt="Icon2"></img></div>
    );
  }
  const Icon3 = () => {
    return (
      <div className="col-12 px-0 px-md-3 p-3 m-0 icon text-center flex-fill" ><img src={icon3} className='p-2' alt="Icon3"></img></div>
    );
  }
  const Icon4 = () => {
    return (
      <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><img src={icon4} className='p-2' alt="Icon4"></img></div>
    );
  }
  const Icon5 = () => {
    return (
      <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><img src={icon5} className='p-2' alt="Icon5"></img></div>
    );
  }
  const Icon6 = () => {
    return (
      <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><img src={icon6} className='p-2' alt="Icon6"></img></div>
    );
  }
  const Icon7 = () => {
    return (
      <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><img src={icon7} className='p-2' alt="Icon7"></img></div>
    );
  }
  const Logout = () => {
    return (
      <div className='row m-0 p-0 icon flex-fill'>
        <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill"><img src={logout} className='p-2' alt="LogOut"></img></div>
      </div>
    );
  }
export default Sidebar;