import './MainColumn.css';
import TopRow from '../TopRow/TopRow';
const MainColumn = () => {
    return (
        <div className="col-11 m-0 p-2 p-md-4 flex-fill">
            <div className="row p-0 m-0 flex-fill d-flex justify-content-end">
                <TopRow />
            </div>
        </div>
    );
};


export default MainColumn;