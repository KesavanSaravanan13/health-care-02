import Forms from '../Forms/Forms';
import { Col, Row } from 'react-bootstrap';

const Profile = () => {
    return (
        <Col className="col-11 m-0 p-0 p-md-4 flex-fill">
            <Row className="p-4 p-md-0 m-0">
                <Forms />
            </Row>
        </Col>
    );
}

export default Profile;