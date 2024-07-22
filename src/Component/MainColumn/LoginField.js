import { Col, Row } from "react-bootstrap";
import { ErrorMessage, Field } from "formik";

const LoginField = ({ errors, touched }) => {
    const loginFieldData = [
        { label: "E-mail : ", name: "email", placeholder: "Enter your mail", type: "email" },
        { label: "Password : ", name: "password", placeholder: "Enter your password", type: "password" },
    ];

    return (
        loginFieldData.map((field, index) => (
            <Col key={index} className='m-0 p-3 py-2 pt-4 col-8 flex-grow-1 flex-sm-grow-0'>
                <Row className="m-0 p-0 flex-wrap">
                    <label htmlFor={field.name} className='col-xl-4 m-0 p-0 fw-semibold fs-5 text-start pe-2' >{field.label}</label>
                    <Field name={field.name} className={`col-xl-8 p-2 m-0 w-50 flex-fill ${errors[field.name] && touched[field.name] ? 'input-error' : ''} `}></Field>
                    <ErrorMessage name={field.name} component="div" className="error-message" />
                </Row>
            </Col>
        ))
    );
}

export default LoginField;