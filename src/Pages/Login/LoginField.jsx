import '../../css/LoginField.css';
import { Col, Row } from "react-bootstrap";
import { ErrorMessage, Field } from "formik";

const LoginField = ({ errors, touched }) => {
    const loginFieldData = [
        { label: "E-mail : ", name: "email", placeholder: "Enter your mail", type: "email" },
        { label: "Password : ", name: "password", placeholder: "Enter your password", type: "password" },
    ];

    return (
        loginFieldData.map((field, index) => (
            <Col key={index} className='m-0 p-3 py-2 col-8 flex-grow-1 flex-sm-grow-0'>
                <Row className="m-0 p-0 flex-wrap">
                    <label htmlFor={field.name} className='col-xl-4 m-0 p-0 fw-semibold fs-5 text-start pe-2' >{field.label}</label>
                    <Col className='m-0 p-0 h-75'>
                        <Field name={field.name} type={field.name} className={`w-100 p-2 m-0 flex-fill ${errors[field.name] && touched[field.name] ? 'input-error' : ''} `}></Field>
                        <ErrorMessage name={field.name} component="div" className="error-message text-start" />
                    </Col>
                </Row>
            </Col>
        ))
    );
}

export default LoginField;