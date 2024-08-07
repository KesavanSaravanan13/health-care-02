import moment from 'moment';
import '../../Css/Td.css';

const Td = (props) => {
    if(props.type === 'date')
        return <td className='m-0 '>{moment(props.value).format('lll')}</td>;
    return <td className='m-0 '>{props.value}</td>;
}
export default Td;