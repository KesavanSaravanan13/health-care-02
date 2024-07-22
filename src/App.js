import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainColumn from './Component/MainColumn/MainColumn';
import Login from './Component/MainColumn/Login';
import PrivateRoutes from './Component/MainColumn/PrivateRoutes';

function App() {

  return (
    <Router>
      <Routes>
        <Route excat path='/' element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/profile' element={<MainColumn message={'Profile'} />} />
          <Route path='/dashboard' element={<MainColumn message={'Dashboard'} />} />
          <Route path='/patientlist' element={<MainColumn message={'PatientList'} />} />
          <Route path="/patientlist/:patientId" element={<MainColumn message={'ViewPatientDetails'} />} />
          <Route path='/providers' />
          <Route path='/clicnicaltrails' />
          <Route path='/paitentcarereport' />
          <Route path='/messagecenter' />
        </Route>
      </Routes>
    </Router>
  );
}




export default App;
