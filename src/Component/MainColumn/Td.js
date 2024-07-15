import '../MainColumn/Td.css';

import { Link, Route, Routes } from 'react-router-dom';

const Td = (props) => {
    return (
        <td className='m-0 '>
            {/* <Link to={`/patientlist/${props.id}`} className='text-decoration-none m-0 p-0 text-dark'> */}
            {props.value}
            {/* </Link> */}
            </td>
    );
}


export default Td;