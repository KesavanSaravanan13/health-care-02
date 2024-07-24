import { Button, Col, Row } from "react-bootstrap";
import TopRow from "../TopRow/TopRow";
import ColumnTable from "./ColumnTable";
import search from '../Assests/search-interface-symbol.png';

const SearchBar = ({handleDisplay}) => {
    return(
        <Col className="col-12 m-0 p-0 flex-fill">
                <TopRow name={'Jessica'} />
                <Row className='m-0 p-0 pt-4  fs-5 fw-semibold'>
                    <Col className='col-4 m-0 p-0 text-start flex-grow-1'>Patient List</Col>
                    <Col className='col-4 m-0 p-0 flex-grow-1 d-flex justify-content-end'>
                        <form className='m-0 p-0'>
                            <Row className='m-0 p-0 d-flex justify-content-sm-between justify-content-end align-items-center '>
                                <Col className='col-10 m-0 p-0 px-3 inputCol flex-grow-1 flex-sm-grow-0'>
                                    <Row className='m-0 p-0 d-flex flex-nowrap justify-content-between'>
                                        <Col className='col-1 m-0 p-2 ps-0 pt-1'>
                                            <Button className='m-0 p-0' variant='none'>
                                                <img src={search} className=" m-0 p-0"
                                                    width="20px" height="15px" alt=""></img>
                                            </Button>
                                        </Col>
                                        <input type="text" className='col-8 m-0 ms-4 p-2 ps-0 inputrow' placeholder='Search'></input>
                                    </Row>
                                </Col>
                                <Col className='col-2 m-0 p-0 w-auto mt-2 mt-md-0 '><Button className='px-3 p-1 fs-5 fw-semibold text-light w-auto' onClick={handleDisplay} style={{ backgroundColor: "#5dcad4", border: 'None' }}>+</Button></Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
                <Row className='m-0 mt-3 p-0 overflow-auto'>
                    <ColumnTable/>
                </Row>
            </Col>
    );
}

export default SearchBar;