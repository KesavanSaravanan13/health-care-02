import React from "react";
import Td from "./Td";
import view from '../Assests/view.png';
import { Link } from "react-router-dom";
import { Col, Row, Table } from "react-bootstrap";

interface IColumnLabels{
    colValue: string;
    label: string;
    type: string;
}

export type DataItem = {
    id: string;
    title: string;
    creationAt: string;
    price: number;
};

type ColumnTableProps = {
    data: DataItem[];
    loading: boolean;
};
const ColumnTable: React.FC<ColumnTableProps> = ({ data, loading }) => {
    const tdValue : IColumnLabels[] = [
        { colValue: 'col-1', label: 'S.No', type: 'text', },
        { colValue: 'col-4', label: 'Treatment Name', type: 'text', },
        { colValue: 'col-3', label: 'Joined Date and Time', type: 'date', },
        { colValue: 'col-2', label: 'Consumption type', type: 'text', },
    ];
    let count = 0;
    return (
        <Table className="m-0 p-0">
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
                        data.length > 0 ?
                            data?.map(item => (
                                <tr className='m-0 p-0 w-100' key={item.id}>
                                    <td className='m-0 col-1'>{++count}</td>
                                    <Td type={'text'} className='col-4' id={item.id} value={item.title} />
                                    <Td type={'date'} className='col-3' id={item.id} value={item.creationAt} />
                                    <Td type={'text'} className='col-2' id={item.id} value={item.price} />
                                    <td className='m-0 text-center col-1'><Link to={`/patientlist/${item.id}`}><img src={view} alt='view' /></Link></td>
                                </tr>
                            ))
                            : (
                                <tr className='m-0 p-0'>
                                    <td className='m-0 fw-semibold text-center' style={{ color: '#5cdad4' }} colSpan={5}>No records for the result, Search Again!!!</td>
                                </tr>
                            )
                    )
                }
            </tbody>
        </Table>
    );
}

export default ColumnTable;