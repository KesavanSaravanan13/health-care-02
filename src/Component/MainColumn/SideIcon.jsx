import { Col } from "react-bootstrap";


const SideIcon = ({ic,alt}) => {
    return (
        <Col className="col-12 p-3 px-0 px-md-3 m-0 icon text-center flex-fill z-0" >
            <img src={ic} alt={alt}></img>
        </Col>
    );
}

export default SideIcon;