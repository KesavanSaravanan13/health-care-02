import TopRow from "../TopRow/TopRow";
import Pagination from "./Pagination";
import ColumnTable from "./ColumnTable";
import sear from '../Assests/search-interface-symbol.png';
import { Button, Col, Row } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import { useGetDataQuery } from "../../reducers/apiSlice";
import { string } from "yup";
// import { getProducts } from "./AxiosApi";
// import store from "../../app/store";
// import { getData } from "../../reducers/getReducers";
// import { useSelector } from "react-redux";
interface SearchBarProps {
    handleDisplay: () => void;
}
interface DataType {
    title: string;
}
const SearchBar : React.FC<SearchBarProps> = ({ handleDisplay }) => {
    // const dataFromStore = useSelector(state => state.data.data);
    // const load = useSelector(state => state.data.loading);
    const { data: dataFromStore , isLoading, refetch } = useGetDataQuery(undefined);
    const [data, setData] = useState<DataType[]>([]);
    const [duplicateData, setDuplicateData] = useState<DataType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [recordsPerPage, setRecordsPerPage] = useState<number>(5);
    const [selectedValue, setSelectedValue] = useState<number>(5);
    const typingTime = useRef<NodeJS.Timeout | null>(null);

    const searchFilter = (newVal) => {
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
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchFilter(e.target.value);
        }
    }
    const handleChange = (e) => {
        const newVal = e.target.value;
        if (typingTime.current) {
            clearTimeout(typingTime.current);
        }
        setLoading(true);

        typingTime.current = setTimeout(() => {
            searchFilter(newVal);
        }, 1000);
    };

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        setRecordsPerPage(event.target.value);
    };

    // useEffect(() => {
    //     setLoading(true);
    // store.dispatch(getData())
    // .finally(() => {
    //     setTimeout(() => {
    //         setLoading(false); 
    //     }, 1500);
    //     setLoading(false); 
    // });
    // }, []);

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

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = Array.isArray(data) ? data.slice(indexOfFirstRecord, indexOfLastRecord) : [];
    const nPages = Array.isArray(data) ? Math.ceil(data.length / recordsPerPage) : 0;
    const numberValue = [1, 2, 3, 4, 5];

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
                                    <input type="text" className='col-8 m-0 ms-4 p-2 ps-0 inputrow' onKeyDown={handleKeyDown} style={{ fontSize: '15px' }} onChange={handleChange} placeholder='Search by Treatment Name' />
                                </Row>
                            </Col>
                            <Col className='col-2 m-0 p-0 w-auto mt-2 mt-md-0'>
                                <Button className='px-3 p-1 fs-5 fw-semibold text-light w-auto' onClick={handleDisplay} style={{ backgroundColor: "#5dcad4", border: 'None' }}>+</Button>
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
                                    <option value={v * 5} key={index}>{v * 5}</option>
                                ))
                            }
                        </select>
                    </form>
                </Col>
            </Row>
            <Row className='m-0 mt-3 p-0 overflow-auto'>
                <ColumnTable data={currentRecords} loading={loading} />
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
