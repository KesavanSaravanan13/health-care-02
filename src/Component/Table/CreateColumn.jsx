import moment from 'moment';
import EditColumn from '../Edit-Column/EditColumn.tsx';
import { Cancel, Success } from "../Sweet-Fires/SweetFires.jsx";

const CreateColumn = ({ header, buttonName, column, setFromData, offFunc, formData, displayOn, handleCreate, handlePre, handleSave, count, setCount }) => {
    if (column === 'edit') {
        const initialValues = {
            title: formData.title || '',
            price: formData.price || '',
            creationAt: formData.creationAt || moment().format('lll'),
            description: formData.description || 'Hi there',
            categoryId: formData.categoryId || 1,
            images: formData.images || ["https://example.com/product-image.jpg"]
        };
        const handleChange = (e, setFieldValue) => {
            setCount(count + 1);
            setFieldValue(e.target.name, e.target.value);
        };
        const Submit = (values) => {
            handleCreate(values);
            if (count > 0) {
                Success();
            } else {
                Cancel();
            }
            setTimeout(() => {
                handleDisplay();
            }, 1000)
            setTimeout(() => {
                setCount(0);
            }, 2000)
        }
        const handleDisplay = () => {
            offFunc(!displayOn);
        }
        return (<EditColumn setFromData={setFromData} initialValues={initialValues}
            Submit={Submit} header={header} column={column} buttonName={buttonName} handleChange={handleChange} handleDisplay={handleDisplay} count={count} setCount={setCount} />
        );
    } else {
        const handleChange = (e, setFieldValue) => {
            setCount(count + 1);
            setFieldValue(e.target.name, e.target.value);
        };
        const initialValues = {
            title: '',
            price: '',
            creationAt: moment().format('lll'),
            description: 'Hi there',
            categoryId: 1,
            images: ["https://example.com/product-image.jpg"]
        };
        const Submit = (values) => {
            handleCreate(values);
            Success();
        }
        const handleDisplay = () => {
            offFunc(!displayOn);
            handlePre();
        }
        return (
            <EditColumn setFromData={setFromData} initialValues={initialValues} handleChange={handleChange}
                Submit={Submit} header={header} column={column} buttonName={buttonName} handleDisplay={handleDisplay} count={count} setCount={setCount} />
        );
    }
}

export default CreateColumn;