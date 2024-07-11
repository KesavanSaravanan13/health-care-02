import { useParams } from "react-router-dom";
import TopRow from "../TopRow/TopRow";
import doc from '../Assests/doc.jpg';
import { Col, Row } from "react-bootstrap";
import '../MainColumn/ViewPatientDetails.css';
import call from '../Assests/telephone.png'
import msg from '../Assests/Frame 23.png';
import video from '../Assests/video.png';


const ViewPatientDetails = () => {
    const { patientId } = useParams();

    const Patientlist = {
        patientId: patientId,
        patientName: 'Muththu',
        patientMail: 'muthu@gmail.com',
        patientIssue: 'Alcohol use Disorder'

    }
    return (
        
        <div className="col-11 m-0 p-0 flex-fill">
            <div className="row m-0 p-2 p-md-4">
                <div className="row p-0 m-0 ">
                    <div className='col-12 m-0 p-0 pb-5'>
                        <div className="row p-0 m-0 justify-content-end FirstRow flex-wrap">
                            <TopRow name={'Jessica'} />
                        </div>
                        <div className="row p-0 py-2 pt-4 m-0 profile">
                            <Col className="col-2 m-0 p-0 me-2 w-auto d-flex align-items-center">Patient Details</Col>
                            <Col className="col-1 ms-2 w-auto m-0 p-0 fs-3 d-flex align-items-center text-secondary">{'>'}</Col>
                            <Col className="m-0 p-0 ms-3 fs-3 d-flex align-items-center">{Patientlist.patientName}</Col>
                        </div>

                        <div className="row p-0 py-2 m-0 patientActive">
                            <div className='col-1 m-0 p-0 px-2 docimg'><img src={doc} className='igg' width={80} height={80}></img></div>
                            <div className='col-5 m-0 p-0 px-2 d-flex flex-wrap'>
                                <div className='col-12 m-0 p-0 name01 h-auto'>
                                    <div className="row m-0 p-0">
                                        <div className="col-8 m-0 p-0 me-2 w-auto">{Patientlist.patientName}</div>
                                        <div className="col-2 m-0 p-0"><span className='m-0 p-0 text-success fw-semibold' style={{ fontSize: "14px" }}>• Active</span></div>
                                    </div>
                                </div>
                                <div className='col-12 m-0 p-0 px-2 w-auto fw-semibold' style={{ backgroundColor: '#e9f5f7', borderRadius: "5px", height: "fit-content", color: "#5dcad4", fontSize: "12px" }}>{Patientlist.patientIssue}</div>
                                <div className='col-12 m-0 p-0 name02 h-auto fw-semibold'>{Patientlist.patientMail}</div>
                            </div>
                            <div className='col py-2 py-sm-0 p-0 m-0 d-flex justify-content-end align-items-center pe-md-3 pe-2'>
                                <Row className="row m-0 p-0 py-2 h-auto" style={{height:"55px",width:"150px",border:"1px solid lightgray",borderRadius:"10px"}}>
                                    <Col className="m-0 p-0 d-flex justify-content-center align-items-center  h-auto">
                                        <img src={call} className="m-0 p-0"  width={"20px"} height={"20px"}/>
                                    </Col>
                                    <Col className="m-0 p-0 d-flex justify-content-center align-items-center h-auto">
                                        <img src={msg} className="m-0 p-0" width={"20px"} height={"20px"}/>
                                    </Col>
                                    <Col className="m-0 p-0 d-flex justify-content-center align-items-center  h-auto">
                                        <img src={video} className="m-0 p-0"  width={"20px"} height={"20px"}/>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewPatientDetails;