import './MainColumn.css';
import Profile from './Profile';
import Dashboard from './Dashboard';
import PatientList from './PatientList';
import ViewPatientDetails from './ViewPatientDetails';
import Sidebar from './SideBar';


const MainColumn = (props) => {

    if (props.message === 'Profile') {
        return (
            <div className='row m-0 p-0 vh-100 flex-nowrap flex-fill'>
                <Sidebar/>
                <Profile />
            </div >
        );
    } else if (props.message === 'Dashboard') {
        return (
            <div className='row m-0 p-0 vh-100 flex-nowrap flex-fill'>
                <Sidebar/>
                <Dashboard />
            </div >
        );
    } else if (props.message === 'PatientList') {
        return (
            <div className='row m-0 p-0 vh-100 flex-nowrap flex-fill'>
                <Sidebar/>
                <PatientList />
            </div >
        );
    } else if (props.message === 'ViewPatientDetails') {
        return (
            <div className='row m-0 p-0 vh-100 flex-nowrap flex-fill'>
                <Sidebar/>
                <ViewPatientDetails />
            </div >
        );
    }

};


export default MainColumn;