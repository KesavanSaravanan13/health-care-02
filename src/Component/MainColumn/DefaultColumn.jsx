import { Col, Row } from "react-bootstrap";

const DefaultColumn = ({message}) => {
    return (
        <Col className="col-11 m-0 p-0 p-md-4 flex-fill">
            <Row className="p-4 p-md-0 m-0 vh-100 d-flex justify-content-center align-items-center w-100">
                <p className="ms-3 m-0 p-0 fs-4 fw-semibold text-center">{message}</p>
            </Row>
        </Col>
    );
}


export default DefaultColumn;