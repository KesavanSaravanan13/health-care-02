import logo from './logo.svg';
import './App.css';
import Logo from '../src/Component/Assests/frame_small.png';
import icon1 from '../src/Component/Assests/Frame 15.png';
import icon2 from '../src/Component/Assests/Frame 16.png';
import icon3 from '../src/Component/Assests/Frame 13.png';
import icon4 from '../src/Component/Assests/Frame 9.png';
import icon5 from '../src/Component/Assests/Frame 8.png';
import icon6 from '../src/Component/Assests/Frame 14.png';
import icon7 from '../src/Component/Assests/Frame 10.png';
import logout from '../src/Component/Assests/Frame 6.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainColumn from './Component/MainColumn/MainColumn';

function App() {
  return (
    <div className='row m-0 p-0 vh-100 flex-wrap'>
      <Router>
        <div className='col-1 m-0 p-0 justify-content-center sidebar'>
          <ul className='m-0 p-0 d-flex justify-content-center flex-wrap sticky-top bottom-0 left-0 vh-100'>
            <div className='m-0 p-0'>
              <li className='m-0 p-0'><Link to='/'><LoGo /></Link></li>
              <li className='m-0 p-0'><Link to='/te'><Icon1 /></Link></li>
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
        <Routes>
          <Route excat path='/' element={<MainColumn message={'Profile'} />} />
          <Route path='/te' />
          <Route path='/dashboard' element={<MainColumn message={'Dashboard'} />} />
          <Route path='/patientlist' element={<MainColumn message={'PatientList'} />} />
          <Route path="/patientlist/:patientId" element={<MainColumn message={'ViewPatientDetails'} />} />
          <Route path='/providers' />
          <Route path='/clicnicaltrails' />
          <Route path='/paitentcarereport' />
          <Route path='/messagecenter' />
        </Routes>
      </Router>
    </div>
  );
}

const LoGo = () => {
  return (
    <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill z-0" >
      <a className='m-0 p-0' href=''>
        <img src={Logo} alt="Logo"></img>
      </a>
    </div>
  );
}
const Icon1 = () => {
  return (
    <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" >
      <a className='m-0 p-0' href=''>
        <img src={icon1} className='p-3 icon1' alt="Icon1"></img>
      </a>
    </div>
  );
}
const Icon2 = () => {
  return (
    <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><a className='m-0 p-0' href=''><img src={icon2} className='p-2' alt="Icon2"></img></a></div>
  );
}
const Icon3 = () => {
  return (
    <div className="col-12 px-0 px-md-3 p-3 m-0 icon text-center flex-fill" ><a className='m-0 p-0' href=''><img src={icon3} className='p-2' alt="Icon3"></img></a></div>
  );
}
const Icon4 = () => {
  return (
    <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><a className='m-0 p-0' href=''><img src={icon4} className='p-2' alt="Icon4"></img></a></div>
  );
}
const Icon5 = () => {
  return (
    <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><a className='m-0 p-0' href=''><img src={icon5} className='p-2' alt="Icon5"></img></a></div>
  );
}
const Icon6 = () => {
  return (
    <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><a className='m-0 p-0' href=''><img src={icon6} className='p-2' alt="Icon6"></img></a></div>
  );
}
const Icon7 = () => {
  return (
    <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill" ><a className='m-0 p-0' href=''><img src={icon7} className='p-2' alt="Icon7"></img></a></div>
  );
}
const Logout = () => {
  return (
    <div className='row m-0 p-0 icon flex-fill'>
      <div className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill"><a className='m-0 p-0' href=''><img src={logout} className='p-2' alt="LogOut"></img></a></div>
    </div>
  );
}


export default App;
