import '../../css/Submit.css';
import { Button, Row } from 'react-bootstrap';
import { Cancel, Updated } from '../../component/sweet-fires/SweetFires';

const Update = (props) => {
    return (
        <Button type="buttton" value="Save" className={`m-2 p-1 ${props.value}`} onClick={
            () => {
                props.funct(false, true);
                if (props.value === 'Update') {
                    Updated();
                } else {
                    Cancel();
                }
            }
        } >{props.value}</Button>
    );

}

export default Update;