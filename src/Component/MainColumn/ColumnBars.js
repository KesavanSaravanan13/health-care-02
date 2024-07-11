import { Col, Row } from 'react-bootstrap';
import '../MainColumn/ColumnBars.css';

const ColumnBars = (props) => {
    return (
        <Col className='m-0 p-3 d-flex flex-wrap justify-content-between fw-semibold column'>
            <Col className='col-6 m-0 p-0'>
                <Row className='m-0 p-0'>{props.messageTitle}</Row>
                <Row className='m-0 p-0 '>{props.messageCount}</Row>
            </Col>
            <Col className='col-3 m-0 p-0 d-flex justify-content-end align-items-center'>
                <Row className='m-0 p-3 rounded patientdp'>
                    <img src={props.messageImage} className='m-0 p-0 ' width={'24px'} height={'24px'} />
                </Row>
            </Col>
        </Col>
    );
}

export default ColumnBars;