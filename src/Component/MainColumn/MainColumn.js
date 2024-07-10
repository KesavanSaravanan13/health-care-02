import './MainColumn.css';
import TopRow from '../TopRow/TopRow';
const MainColumn = () => {
    return (
        <div className='row m-0 p-0'>
            <div className="col-12 m-0 p-2 p-md-4 ">
                <div className="row p-0 m-0 flex-fill d-flex justify-content-end">
                    <TopRow />
                </div>
            </div>
        </div>
    );
};

  
export default MainColumn;