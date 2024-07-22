import TopRow from '../TopRow/TopRow';
import ColumnBars from './ColumnBars';
<<<<<<< HEAD
=======
import recover from '../Assests/Frame 21.png';
import Patientdp from '../Assests/Frame 20.png';
import treatment from '../Assests/Frame 22.png';
>>>>>>> 286d2bfd66b847239b9f91274d566bf99b9cc6dd
import { Col, Row } from 'react-bootstrap';


const Dashboard = () => {
    return (
        <Col className="col-11 m-0 p-2 p-md-4 flex-fill">
            <TopRow name={'Jessica'} />
            <Row className='m-0 p-0 pt-4 d-flex justify-content-start fs-5 fw-semibold'>
                Dashboard
            </Row>
            <Row className='m-0 mt-3 p-0 d-flex justify-content-between gap-4'>
                <ColumnBars messageTitle={'Patients Enrolled'} messageCount={'120'} messageImage={Patientdp} />
                <ColumnBars messageTitle={'Patients in Treatment'} messageCount={'80'} messageImage={treatment} />
                <ColumnBars messageTitle={'Recovered Patients'} messageCount={'220'} messageImage={recover} />
            </Row>
        </Col>
    );
}

export default Dashboard;