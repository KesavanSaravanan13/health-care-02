import moment from "moment";
import doc from '../../Assests/doc.jpg';
import TopRow from "../../Component/TopRow/TopRow";
import '../../Css/MainColumn.css';
import video from '../../Assests/video.png';
import msg from '../../Assests/Frame 23.png';
import call from '../../Assests/telephone.png';
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const DetailsRow = (props) => {
    return (
        <Col className="m-0 p-0">
            <Row className="p-0 m-0 justify-content-end FirstRow flex-wrap">
                <TopRow name={'Jessica'} />
            </Row>
            <Row className="p-0 py-2 pt-4 m-0 profile">
                <Col className="col-2 m-0 p-0 me-2 w-auto d-flex align-items-center"><Link to={'/patientlist'} className="text-decoration-none text-black">Patient List</Link></Col>
                <Col className="col-1 ms-2 w-auto m-0 p-0 fs-3 d-flex align-items-center text-secondary">{'>'}</Col>
                <Col className="col-12 col-md-8 m-0 p-0 ms-3 fs-3 d-flex align-items-center">{props.value.title}</Col>
            </Row>
            <Row className="p-0 py-2 m-0 patientActive d-flex justify-content-center justify-content-sm-start mt-4 mt-md-0">
                <Col className='col-1 m-0 p-0 px-2 docimg '><img src={doc} className='igg' width={80} height={80} alt="Profile"></img></Col>
                <Col className='col-8 col-md-5 m-0 p-0 px-2 d-flex flex-wrap flex-fill mt-3 mt-sm-0 text-center text-md-start'>
                    <Row className="m-0 p-0 flex-grow-1">
                        <Col className='col-12 m-0 p-0 name01 h-auto'>
                            <Row className="m-0 p-0">
                                <Col className="col-8 m-0 p-0 me-2 w-auto">{props.value.title}</Col>
                                <Col className="col-2 m-0 p-0 flex-grow-1"><span className='m-0 p-0 text-success fw-semibold activeDr px-1'>• Active</span></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 w-100 justify-content-center justify-content-md-start">
                        <Col className='col-12 m-0 p-0 px-2 w-auto fw-semibold DateOfCreation'>{moment(props.value.creationAt).format('lll')}</Col>
                    </Row>
                    <Row className="m-0 p-0 w-100 justify-content-center justify-content-md-start">
                        <Col className='col-12 m-0 p-0 name02 h-auto fw-semibold'>{`consumption type : ${props.value.price}`}</Col>
                    </Row>
                </Col>
                <Col className='col py-2 py-sm-0 p-0 m-0 d-flex mt-3 mt-md-0 justify-content-center justify-content-md-end align-items-center pe-md-3 pe-2'>
                    <Row className="row m-0 p-0 py-2 imgPops">
                        <Col className="m-0 p-0 d-flex justify-content-center align-items-center  h-auto">
                            <img src={call} className="m-0 p-0" width={"20px"} height={"20px"} alt="call" />
                        </Col>
                        <Col className="m-0 p-0 d-flex justify-content-center align-items-center h-auto">
                            <img src={msg} className="m-0 p-0" width={"20px"} height={"20px"} alt="message" />
                        </Col>
                        <Col className="m-0 p-0 d-flex justify-content-center align-items-center  h-auto">
                            <img src={video} className="m-0 p-0" width={"20px"} height={"20px"} alt="video call" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
}


export default DetailsRow;