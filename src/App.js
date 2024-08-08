import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainColumn from '../src/pages/main-column/MainColumn.jsx';
import Login from '../src/pages/login/Login.tsx';
import PrivateRoutes, { LoginPrivateRoutes } from './component/private-route/PrivateRoutes.jsx';
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
          <Route path='/providers' element={<MainColumn message={'Providers'}/>} />
          <Route path='/clicnicaltrails' element={<MainColumn message={'ClinicalTrails'}/>}  />
          <Route path='/paitentcarereport' element={<MainColumn message={'PatientCareReport'}/>}  />
          <Route path='/messagecenter' element={<MainColumn message={'MessageCenter'}/>}  />
        </Route>
      </Routes>
    </Router>
  );
}




export default App;
