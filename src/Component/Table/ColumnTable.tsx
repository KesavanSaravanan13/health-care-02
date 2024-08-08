import Td from "./Td";
import React from "react";
import '../../css/MainColumn.css';
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const view = require('../../assests/view.png');
     
interface IColumnLabels {
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
    currentPage: number;
    recordsPerPage: number;
    loading: boolean;
};

const ColumnTable: React.FC<ColumnTableProps> = ({ data, currentPage, recordsPerPage, loading }) => {
    const tdValue: IColumnLabels[] = [
        { colValue: 'col-1', label: 'S.No', type: 'text', },
        { colValue: 'col-4', label: 'Treatment Name', type: 'text', },
        { colValue: 'col-3', label: 'Joined Date and Time', type: 'date', },
        { colValue: 'col-2', label: 'Consumption type', type: 'text', },
    ];
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
                            <td colSpan={5} className="text-center">
                                <div className="spinner-border themeColor" />
                            </td>
                        </tr>
                    ) : (
                        data.length > 0 ? (
                            data?.map((item, index) => (
                                <tr className='m-0 p-0 w-100' key={item.id}>
                                    <td className='m-0 col-1'>{((currentPage * recordsPerPage) - recordsPerPage) + (index + 1)}</td>
                                    <Td type={'text'} className='col-4' id={item.id} value={item.title} />
                                    <Td type={'date'} className='col-3' id={item.id} value={item.creationAt} />
                                    <Td type={'text'} className='col-2' id={item.id} value={item.price} />
                                    <td className='m-0 text-center col-1'><Link to={`/patientlist/${item.id}`}><img src={view} alt='view' /></Link></td>
                                </tr>
                            ))
                        ) : (
                            <tr className='m-0 p-0'>
                                <td className='m-0 fw-semibold text-center themeColor' colSpan={5}>No records for the result, Search Again!!!</td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </Table>
    );
}

export default ColumnTable;