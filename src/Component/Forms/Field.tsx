import React from "react";
import { Col, Row } from "react-bootstrap";
import { ErrorMessage, Field } from "formik";

interface IFieldForFormProps {
    errors: { [key: string]: string | undefined };
    touched: { [key: string]: boolean | undefined };
    valueDisable: boolean;
}

interface IFormLabels {
    label: string;
    name: string;
    placeholder: string;
    type: string;
    options?: string[];
}

const FieldForForm: React.FC<IFieldForFormProps> = ({ errors, touched, valueDisable }) => {
    const fieldData: IFormLabels[] = [
        { label: "First Name", name: "firstName", placeholder: "First Name", type: "text" },
        { label: "Last Name", name: "lastName", placeholder: "Last Name", type: "text" },
        { label: "Email Address", name: "email", placeholder: "Email Address", type: "email" },
        { label: "Gender", name: "gender", placeholder: "Please choose the gender", type: "select", options: ["Male", "Female", "Others"] },
        { label: "DOB", name: "dob", placeholder: "Date-of-Birth", type: "date" },
        { label: "Phone Number", name: "phoneNumber", placeholder: "Phone Number", type: "number" },
        { label: "Address", name: "address", placeholder: "Address", type: "text" },
        { label: "City", name: "city", placeholder: "City", type: "text" },
        { label: "State", name: "state", placeholder: "State", type: "text" },
        { label: "Postal Code", name: "postalCode", placeholder: "Postal Code", type: "number" },
    ];

    return (
        <Row className='m-0 p-0'>
            {fieldData.map((field, index) => (
                <Col key={index} className='col-12 col-md-4 col-lg-4 m-0 p-0 px-2'>
                    <label htmlFor={field.name} className='col-12 m-0 p-0 pb-2'>{field.label}</label>
                    {field.type === "select" ? (
                        <Field name={field.name} as='select' className={`m-0 col-12 gdiv d-flex align-items-center w-100 h-auto p-2 ${errors[field.name] && touched[field.name] ? 'input-error' : ''}`} disabled={valueDisable}>
                            <option>{field.placeholder}</option>
                            {(field.options || []).map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </Field>
                    ) : (
                        <Field name={field.name} type={field.type} className={`col-12 m-0 w-100 h-auto p-2 ${errors[field.name] && touched[field.name] ? 'input-error' : ''}`} disabled={valueDisable} placeholder={field.placeholder} />
                    )}
                    <ErrorMessage name={field.name} component="div" className="error-message" />
                </Col>
            ))}
        </Row>
    );
}

export default FieldForForm;