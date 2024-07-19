import { useField } from "formik";

const CustomInput = ({ ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
            <label htmlFor="address" className='col-12 m-0 p-0 pb-2'>Address</label>
            <input
                {...field}
                {...meta}
                className={meta.touched && meta.error ? "input-error" : ""}
                // className='col-12 m-0 w-100 h-auto p-2'
                // disabled={message.props}
            />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </div>
    );
}

export default CustomInput;