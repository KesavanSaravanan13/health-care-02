
import TopRow from '../TopRow/TopRow';
import Patientdp from '../Assests/Frame 20.png';
import recover from '../Assests/Frame 21.png';
import treatment from '../Assests/Frame 22.png';
import ColumnBars from './ColumnBars';
import { Row } from 'react-bootstrap';


const Dashboard = () => {
    return (
        <div className="col-11 m-0 p-2 p-md-4 flex-fill">
            <TopRow name={'Jessica'} />
            <Row className='m-0 p-0 pt-4 d-flex justify-content-start fs-5 fw-semibold'>
                Dashboard
            </Row>
            <Row className='m-0 mt-3 p-0 d-flex justify-content-between gap-5'>
                <ColumnBars messageTitle={'Patients Enrolled'} messageCount={'120'} messageImage={Patientdp} />
                <ColumnBars messageTitle={'Patients in Treatment'} messageCount={'80'} messageImage={treatment} />
                <ColumnBars messageTitle={'Recovered Patients'} messageCount={'220'} messageImage={recover} />
            </Row>
        </div>
    );
}

export default Dashboard;