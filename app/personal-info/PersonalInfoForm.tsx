"use client"
import { useFormik } from "formik";
import * as yup from "yup";
import FormField from "../../components/FormField";
import { useState } from "react";
import { selectProfile, setProfile } from "@/lib/rootSlice";
import { useDispatch, useSelector } from "react-redux";

const validationSchema = yup.object({
    firstName: yup
        .string()
        .required("Field is required"),
    lastName: yup
        .string()
        .required("Field is required"),
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
});

const PersonalInfoForm = () => {
    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const formik = useFormik({
        initialValues: {
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email,
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            dispatch(setProfile(values));
            setEdit(false);
        },
    });

    const handleCancel = () => {
        formik.resetForm({values: {
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email
        }});
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
                <button
                    className="hover:cursor-pointer hover:text-blue-500 font-bold p-3 rounded-md"
                    onClick={() => setEdit(true)}>
                    EDIT
                </button>           
            }
            {edit &&
                <div className="space-x-4">
                    <button
                        className="hover:cursor-pointer text-gray-500 hover:text-gray-700 font-bold p-3 rounded-md"
                        onClick={() => handleCancel()}>CANCEL</button>
                    <button
                        className="hover:cursor-pointer hover:text-blue-500 font-bold p-3 rounded-md"
                        type="submit">SUBMIT</button>
                </div>
            }
        </form>
    );
};

export default PersonalInfoForm