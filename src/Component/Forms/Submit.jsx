import './Submit.css';
import { Button, Row } from 'react-bootstrap';

const Submit = (props) => {
    return (
        <Row className='m-0 p-0 justify-content-end' >
            <Button type="buttton" value="Save" className="m-0 p-2 saveBtn" onClick={
                () => {
                    props.funct(false, true);
                }
            } >Save</Button>
        </Row>
    );
}

export default Submit;