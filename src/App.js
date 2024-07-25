import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainColumn from './Component/MainColumn/MainColumn';
import Login from './Component/MainColumn/Login';
import PrivateRoutes, { LoginPrivateRoutes } from './Component/MainColumn/PrivateRoutes';
import { useEffect } from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LoginPrivateRoutes />}>
          <Route path='/' element={<Login />} />
        </Route>
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
