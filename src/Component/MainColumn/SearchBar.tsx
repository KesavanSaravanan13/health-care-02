import TopRow from "../TopRow/TopRow";
import Pagination from "./Pagination";
import '../MainColumn/EditColumn.css';
import { Button, Col, Row } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import { useGetDataQuery } from "../../reducers/apiSlice";
import ColumnTable, { DataItem } from "./ColumnTable.tsx";

interface SearchBarProps {
    handleDisplay: () => void;
}
const sear = require('../Assests/search-interface-symbol.png');

const SearchBar: React.FC<SearchBarProps> = ({ handleDisplay }) => {
    const { data: dataFromStore, isLoading, refetch } = useGetDataQuery([]);
    const [data, setData] = useState<DataItem[]>([]);
    const [duplicateData, setDuplicateData] = useState<DataItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [recordsPerPage, setRecordsPerPage] = useState<number>(5);
    const [selectedValue, setSelectedValue] = useState<number>(5);
    const typingTime = useRef<NodeJS.Timeout | null>(null);

    const searchFilter = (newVal: string) => {
        setLoading(false);
        if (Array.isArray(data)) {
            if (newVal.trim().length !== 0) {
                const filteredData = duplicateData.filter((values) => values.title.toLowerCase().includes(newVal.toLowerCase()));
                setData(filteredData);
            } else {
                setData(duplicateData);
            }
        } else {
            console.error('Data is not an array:', data);
        }
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchFilter(e.currentTarget.value);
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = e.target.value;
        if (typingTime.current) {
            clearTimeout(typingTime.current);
        }
        setLoading(true);

        typingTime.current = setTimeout(() => {
            searchFilter(newVal);
        }, 1000);
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(parseInt(event.target.value));
        setRecordsPerPage(parseInt(event.target.value));
    };

    useEffect(() => {
        setDuplicateData(dataFromStore);
        setData(dataFromStore);
    }, []);

    useEffect(() => {
        refetch();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
        setDuplicateData(dataFromStore);
        setData(dataFromStore);
    }, [dataFromStore]);

    const indexOfLastRecord: number = currentPage * recordsPerPage;
    const indexOfFirstRecord: number = indexOfLastRecord - recordsPerPage;
    const currentRecords: DataItem[] = Array.isArray(data) ? data.slice(indexOfFirstRecord, indexOfLastRecord) : [];
    const nPages: number = Array.isArray(data) ? Math.ceil(data.length / recordsPerPage) : 0;
    const numberValue: number[] = [1, 2, 3, 4, 5];

    return (
        <Col className="col-12 m-0 p-0 flex-fill">
            <TopRow name={'Jessica'} />
            <Row className='m-0 p-0 pt-4 fs-5 fw-semibold'>
                <Col className='col-12 col-sm-4 m-0 p-0 text-start flex-grow-1 pb-3 pb-sm-0'>Patient List</Col>
                <Col className='col-6 m-0 p-0 flex-grow-1 d-flex justify-content-end'>
                    <form className='m-0 p-0'>
                        <Row className='m-0 p-0 d-flex justify-content-sm-between justify-content-end align-items-center'>
                            <Col className='col-12 col-md-10 m-0 p-0 px-3 inputCol flex-grow-1 flex-sm-grow-0'>
                                <Row className='m-0 p-0 d-flex flex-nowrap justify-content-between align-items-center me-5'>
                                    <Col className='col-1 m-0 p-2 ps-0 pt-0'>
                                        <img src={sear} className=" m-0 p-0" width="18px" height="15px" alt="" />
                                    </Col>
                                    <input type="text" className='col-8 m-0 ms-4 p-2 ps-0 inputrow' onKeyDown={handleKeyDown} onChange={handleChange} placeholder='Search by Treatment Name' />
                                </Row>
                            </Col>
                            <Col className='col-2 m-0 p-0 w-auto mt-2 mt-md-0'>
                                <Button className='px-3 p-1 m-0 fs-5 fw-semibold text-light w-auto btnSub' onClick={handleDisplay} >+</Button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
            <Row className="m-0 p-0 d-flex justify-content-start">
                <Col className="m-0 p-0 fw-semibold col-1 w-auto">No of Rows :</Col>
                <Col xs={1} sm={1}>
                    <form className="m-0 p-0">
                        <select className="m-0 p-1 px-2 fw-semibold" value={selectedValue} onChange={handleSelectChange}>
                            {
                                numberValue.map((v, index) => (
                                    <option className="m-0 p-0 py-1" value={v * 5} key={index}>{v * 5}</option>
                                ))
                            }
                        </select>
                    </form>
                </Col>
            </Row>
            <Row className='m-0 mt-3 p-0 overflow-auto'>
                <ColumnTable data={currentRecords} currentPage={currentPage} recordsPerPage={recordsPerPage} loading={loading} />
            </Row>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </Col>
    );
}

export default SearchBar;
