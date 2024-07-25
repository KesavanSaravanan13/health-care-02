import Td from "./Td";
import axios from "axios";
import view from '../Assests/view.png';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { type } from "@testing-library/user-event/dist/type";

const ColumnTable = () => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const tdValue = [
        { colValue: 'col-1', label: 'S.No',type:'text',  },
        { colValue: 'col-4', label: 'Treatment Name',type:'text',  },
        { colValue: 'col-3', label: 'Joined Date',type:'date',  },
        { colValue: 'col-2', label: 'Consumption type',type:'text',  },
    ];
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(response => {
                console.log(error);
                setLoading(false);
                setError(true);
            });
    }, []);
    let count=0;
    return (
        <Table>
            <thead>
                <tr>
                    {tdValue.map((value, index) => (
                        <th key={index} className={value.colValue}>{value.label}</th>
                    ))}
                    <th className='text-center col-1'>View Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    loading ? (
                        <tr>
                            <td colSpan={5}>
                                <Col className="col-12 m-0 p-2 d-flex justify-content-center align-items-center">
                                    <Row className="spinner-border" role="status" style={{ color: '#5DCAD4' }}>
                                        <span className="visually-hidden">Loading...</span>
                                    </Row>
                                </Col>
                            </td>
                        </tr>
                    ) : (
                        data?.map(item => (
                            <tr className='m-0 p-0' key={item.id}>
                                <td className='m-0 col-1'>{++count}</td>
                                <Td type={'text'} className='col-4' id={item.id} value={item.title} />
                                <Td type={'date'} className='col-3' id={item.id} value={item.creationAt}></Td>
                                <Td type={'text'} className='col-2' id={item.id} value={item.price} />
                                <td className='m-0 text-center col-1'><Link to={`/patientlist/${item.id}`}><img src={view} alt='view' /></Link></td>
                            </tr>
                        )))
                }
            </tbody>
        </Table>
    );
}

export default ColumnTable;