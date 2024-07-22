import '../MainColumn/ColumnBars.css';
import { Col, Row } from 'react-bootstrap';

const ColumnBars = (props) => {
    return (
        <Col className='col-12 col-md-5 col-lg-2 flex-grow-1 m-0 p-2 mt-3 d-flex justify-content-between flex-wrap fw-semibold column'>
            <Col className='col-9 m-0 p-0'>
                <Row className='m-0 p-0'>{props.messageTitle}</Row>
                <Row className='m-0 p-0 '>{props.messageCount}</Row>
            </Col>
            <Col className='col-3 m-0 p-0 d-flex justify-content-end align-items-center'>
                <Row className='m-0 p-3 rounded patientdp'>
                    <img src={props.messageImage} className='m-0 p-0 ' width={'24px'} height={'24px'} alt='DP' />
                </Row>
            </Col>
        </Col>
    );
}

export default ColumnBars;