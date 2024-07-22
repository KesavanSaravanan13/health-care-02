import './MainColumn.css';
import Profile from './Profile';
import Sidebar from './SideBar';
import Dashboard from './Dashboard';
import PatientList from './PatientList';
import ViewPatientDetails from './ViewPatientDetails';
import { Row } from 'react-bootstrap';

const MainColumn = (props) => {
    if (props.message === 'Profile') {
        return (
            <Row className='m-0 p-0 vh-100 flex-nowrap flex-fill'>
                <Sidebar />
                <Profile />
            </Row >
        );
    } else if (props.message === 'Dashboard') {
        return (
            <Row className='m-0 p-0 vh-100 flex-nowrap flex-fill'>
                <Sidebar />
                <Dashboard />
            </Row >
        );
    } else if (props.message === 'PatientList') {
        return (
            <Row className='m-0 p-0 vh-100 flex-nowrap flex-fill'>
                <Sidebar />
                <PatientList />
            </Row >
        );
    } else if (props.message === 'ViewPatientDetails') {
        return (
            <Row className='m-0 p-0 vh-100 flex-nowrap flex-fill'>
                <Sidebar />
                <ViewPatientDetails />
            </Row >
        );
    }
};
export default MainColumn;