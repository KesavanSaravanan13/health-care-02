import moment from 'moment';
import SearchBar from './SearchBar';
import '../MainColumn/PatientList.css';
import CreateColumn from './CreateColumn';
import { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { Error, Success } from './SweetFires';
import { createProducts, getProducts } from './AxiosApi';
import { useCreateDataMutation } from '../../reducers/apiSlice';

const PatientList = () => {
    const [createData] = useCreateDataMutation();
    const [displayOn, setDisplayOn] = useState(false);
    const [count, setCount] = useState(0);
    const [formData, setFormData] = useState({
        title: '',
        price: 0,
        creationAt: moment().format('lll'),
        description: 'Hi there',
        categoryId: 1,
        images: ["https://example.com/product-image.jpg"]
    });
    const handleDisplay = () => setDisplayOn(!displayOn);

    const handleCreate = async (values) => {
        const payload = {
            ...values,
            description: 'Hi there',
            categoryId: 1,
            images: ["https://example.com/product-image.jpg"]
        };
        try {
            const response = await createData(payload);
            setTimeout(window.location.reload(), 5000);
            setDisplayOn(false);
            handlePre();
        } catch (error) {
            console.error(error);
            Error();
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePre = (e) => {
        setFormData({
            ...formData,
            title: '',
            price: 0,
            creationAt: '',
        });
    };

    return (
        <Col className='col-11 m-0 p-2 p-md-4 flex-fill overflow-auto m-0 p-0 position-relative'>
            <SearchBar handleDisplay={handleDisplay} />
            {displayOn ?
                <CreateColumn  setCount={setCount} count={count} header={'Add Details : '} buttonName={'Add'} column={'create'} 
                offFunc={setDisplayOn} displayOn={displayOn} setFromData={setFormData} formData={formData} 
                handleInputChange={handleInputChange} handleCreate={handleCreate} handlePre={handlePre} />
                : null}
        </Col>
    );
}

export default PatientList;