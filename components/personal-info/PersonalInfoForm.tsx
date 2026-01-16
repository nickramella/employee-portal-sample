"use client"
import { useFormik } from 'formik';
import * as yup from 'yup';
import FormField from '../FormField';
import { useState } from 'react';

const validationSchema = yup.object({
    firstName: yup
        .string()
        .required('Field is required'),
    lastName: yup
        .string()
        .required('Field is required'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
});

const PersonalInfoForm = () => {
    const [edit, setEdit] = useState(false);
    const formik = useFormik({
        initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        },
    });

    const handleCancel = () => {
        formik.resetForm();
        setEdit(false);
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <FormField
                label="First Name"
                id="firstName"
                type="text"
                value={formik.values.firstName}
                disabled={!edit}
                handleChange={formik.handleChange}
            />
            <FormField
                label="Last Name"
                id="lastName"
                type="text"
                value={formik.values.lastName}
                disabled={!edit}
                handleChange={formik.handleChange}
            />
            <FormField
                label="Email"
                id="email"
                type="text"
                value={formik.values.email}
                disabled={!edit}
                handleChange={formik.handleChange}
            />
            {!edit &&
                <button onClick={() => setEdit(true)}>Edit</button>           
            }
            {edit &&
                <div className='space-x-4'>
                    <button onClick={() => handleCancel()}>Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            }
        </form>
   );
};

export default PersonalInfoForm