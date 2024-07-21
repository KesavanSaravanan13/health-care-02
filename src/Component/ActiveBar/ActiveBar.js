import './ActiveBar.css';
import doc from '../Assests/doc.jpg';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const ActiveBar = (props) => {
    return (
        <Row className="row topblock p-0 py-2 m-0 mb-5 ">
            <Col className='col-1 m-0 p-0 px-2 docimg'><img src={doc} className='igg' width={70} height={64} /></Col>
            <Col className='col-5 m-0 p-0 px-2'>
                <Col className='col-12 m-0 p-0 name01 d-flex align-items-center nn'>{props.name}</Col>
                <Col className='col-12 m-0 p-0 name02 d-flex align-items-center nn'>{props.mail}</Col>
            </Col>
            <Col className='py-2 py-sm-0 p-0 m-0 d-flex justify-content-start justify-content-sm-end align-items-center pe-md-3 pe-2'>
                <span className='m-0 p-0 px-3 active'>Active</span>
            </Col>
        </Row>
    );
};


export default ActiveBar;