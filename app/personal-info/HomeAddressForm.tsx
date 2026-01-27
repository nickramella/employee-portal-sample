"use client"
import { useFormik } from "formik";
import * as yup from "yup";
import FormField from "../../components/FormField";
import { useState } from "react";
import { selectHomeAddress, setHomeAddress } from "@/lib/rootSlice";
import { useDispatch, useSelector } from "react-redux";

const validationSchema = yup.object({
    country: yup
        .string()
        .required("Field is required"),
    addressLine1: yup
        .string()
        .required("Field is required"),
    addressLine2: yup
        .string(),
    state: yup
        .string()
        .required("Field is required"),
    city: yup
        .string()
        .required("Field is required"),
    zip: yup
        .string()
        .required("Field is required"),
});

const HomeAddressForm = () => {
    const homeAddressInfo = useSelector(selectHomeAddress);
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const formik = useFormik({
        initialValues: {
            country: homeAddressInfo.country,
            addressLine1: homeAddressInfo.addressLine1,
            addressLine2: homeAddressInfo.addressLine2,
            city: homeAddressInfo.city,
            state: homeAddressInfo.state,
            zip: homeAddressInfo.zip,
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            dispatch(setHomeAddress(values));
            setEdit(false);
        },
    });

    const handleCancel = () => {
        formik.resetForm({values: {
            country: homeAddressInfo.country,
            addressLine1: homeAddressInfo.addressLine1,
            addressLine2: homeAddressInfo.addressLine2,
            city: homeAddressInfo.city,
            state: homeAddressInfo.state,
            zip: homeAddressInfo.zip,
        }});
        setEdit(false);
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <FormField
                label="Country"
                id="country"
                type="text"
                value={formik.values.country}
                disabled={!edit}
                handleChange={formik.handleChange}
            />
            <FormField
                label="Address Line 1"
                id="addressLine1"
                type="text"
                value={formik.values.addressLine1}
                disabled={!edit}
                handleChange={formik.handleChange}
            />
            <FormField
                label="Address Line 2"
                id="addressLine2"
                type="text"
                value={formik.values.addressLine2}
                disabled={!edit}
                handleChange={formik.handleChange}
            />
            <FormField
                label="State"
                id="state"
                type="text"
                value={formik.values.state}
                disabled={!edit}
                handleChange={formik.handleChange}
            />
            <FormField
                label="City"
                id="city"
                type="text"
                value={formik.values.city}
                disabled={!edit}
                handleChange={formik.handleChange}
            />
            <FormField
                label="Zipcode"
                id="zip"
                type="text"
                value={formik.values.zip}
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

export default HomeAddressForm