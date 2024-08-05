import './MainColumn.css';
import Profile from './Profile';
import Sidebar from './SideBar';
import Dashboard from './Dashboard';
import PatientList from './PatientList';
import ViewPatientDetails from './ViewPatientDetails';
import { Row } from 'react-bootstrap';
import DefaultColumn from './DefaultColumn';

const MainColumn = (props) => {
    if (props.message === 'Profile') {
        return (
            <Row className='m-0 p-0 vh-100 flex-nowrap flex-fill'>
                <Sidebar value={'profile'} />
                <Profile />
            </Row >
        );
    } else if (props.message === 'Dashboard') {
        return (
            <Row className='m-0 p-0 vh-100 flex-nowrap flex-fill'>
                <Sidebar  value={'Dashboard'}/>
                <Dashboard />
            </Row >
        );
    } else if (props.message === 'PatientList') {
        return (
            <Row className='m-0 p-0 vh-100 flex-nowrap flex-fill'>
                <Sidebar value={'PatientList'} />
                <PatientList />
            </Row >
        );
    } else if (props.message === 'ViewPatientDetails') {
        return (
            <Row className='m-0 p-0 vh-100 flex-nowrap flex-fill'>
                <Sidebar value={'ViewPatientDetails'} />
                <ViewPatientDetails />
            </Row >
        );
    }else if (props.message === 'Providers') {
        return (
            <Row className='m-0 p-0 vh-100 flex-nowrap flex-fill'>
                <Sidebar value={'Providers'} />
                <DefaultColumn message={`"Providers yet to develop"`}/>
            </Row >
        );
    }else if (props.message === 'ClinicalTrails') {
        return (
            <Row className='m-0 p-0 vh-100 flex-nowrap flex-fill'>
                <Sidebar value={'ClinicalTrails'} />
                <DefaultColumn message={`"Clinical Trails yet to develop"`}/>
            </Row >
        );
    }else if (props.message === 'PatientCareReport') {
        return (
            <Row className='m-0 p-0 vh-100 flex-nowrap flex-fill'>
                <Sidebar value={'PatientCareReport'} />
                <DefaultColumn message={`"Patient Care Report yet to develop"`}/>
            </Row >
        );
    }else if (props.message === 'MessageCenter') {
        return (
            <Row className='m-0 p-0 vh-100 flex-nowrap flex-fill'>
                <Sidebar value={'MessageCenter'} />
                <DefaultColumn message={`"Message Center yet to develop"`}/>
            </Row >
        );
    }
};
export default MainColumn;