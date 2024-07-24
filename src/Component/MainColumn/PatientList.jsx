import moment from 'moment';
import SearchBar from './SearchBar';
import '../MainColumn/PatientList.css';
import CreateColumn from './CreateColumn';
import { useState, useEffect } from 'react';
import { Col} from 'react-bootstrap';
import { Error, Success } from './SweetFires';
import { createProducts, getProducts } from './AxiosApi';

const PatientList = () => {
    const [data, setData] = useState();
    const [displayOn, setDisplayOn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        price: 0,
        creationAt: moment().format('lll'),
        description: 'Hi there',
        categoryId: 1,
        images: ["https://example.com/product-image.jpg"]
    });
    const handleDisplay = () => setDisplayOn(!displayOn);
    useEffect(() => {
        getProducts()
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

    const handleCreate = async () => {
        try {
            const response = await createProducts(formData);
            setData([...data, response.data]);
            setDisplayOn(false);
            handlePre();
            console.log(data);
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
        Success();
    };

    return (
        <Col className='col-11 m-0 p-2 p-md-4 flex-fill overflow-auto m-0 p-0 position-relative'>
            <SearchBar handleDisplay={handleDisplay} />
            {displayOn ?
            <CreateColumn formData={formData} handleInputChange={handleInputChange} handleCreate={handleCreate} handleDisplay={handleDisplay} handlePre={handlePre}/> 
            : null}
        </Col>
    );
}

export default PatientList;