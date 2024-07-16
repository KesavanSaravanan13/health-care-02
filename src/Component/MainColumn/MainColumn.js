import './MainColumn.css';
import Profile from './Profile';
import Dashboard from './Dashboard';
import PatientList from './PatientList';
import ViewPatientDetails from './ViewPatientDetails';


const MainColumn = (props) => {

    if (props.message === 'Profile') {
        return (
                <Profile/>
        );
    } else if (props.message === 'Dashboard') {
        return (
            <Dashboard/>
        );
    } else if (props.message === 'PatientList') {
        return (
            <PatientList/>
        );
    } else if (props.message === 'ViewPatientDetails'){
        return(
            <ViewPatientDetails />
        );
    }

};


export default MainColumn;