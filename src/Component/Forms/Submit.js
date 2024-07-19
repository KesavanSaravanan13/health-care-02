import './Submit.css';
const Submit = (props) => {
    return (
        <div className='m-0 p-0 row justify-content-end' >
            <button type="buttton" value="Save" className="m-0 p-2 saveBtn" onClick={
                () => {
                    props.funct(false, true);
                }
            } >Save</button>
        </div>
    );
}

export default Submit;