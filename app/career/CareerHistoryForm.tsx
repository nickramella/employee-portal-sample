import FormField from "@/components/FormField";
import { addCareerHistory } from "@/lib/rootSlice";
import { useFormik } from "formik";
import React, { useState } from "react"
import { useDispatch } from "react-redux";

interface CareerHistoryFormProps {
    workDetails: any;
    createNew?: boolean;
}

const CareerHistoryForm = ({workDetails, createNew}: CareerHistoryFormProps) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(createNew ? true : false);
    const initialValues = {
            company: workDetails.company,
            location: workDetails.location,
            startDate: workDetails.startDate,
            endDate: workDetails.endDate,
    }
    const formik = useFormik({
        initialValues: initialValues,
        // validationSchema: validationSchema,
        onSubmit: values => {
            console.log({...values, new: false, key: crypto.randomUUID()})
            dispatch(addCareerHistory({...values, new: false, key: crypto.randomUUID()}));
            setEdit(false);
        },
    });

    const handleCancel = () => {
        formik.resetForm({values: initialValues});
        setEdit(false);
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <FormField
                label="Company"
                id="company"
                type="text"
                value={formik.values.company}
                disabled={!edit}
                handleChange={formik.handleChange}
            />
            <FormField
                label="Location"
                id="location"
                type="text"
                value={formik.values.location}
                disabled={!edit}
                handleChange={formik.handleChange}
            />
            <FormField
                label="Start Date"
                id="startDate"
                type="text"
                value={formik.values.startDate}
                disabled={!edit}
                handleChange={formik.handleChange}
            />
            <FormField
                label="End Date"
                id="endDate"
                type="text"
                value={formik.values.endDate}
                disabled={!edit}
                handleChange={formik.handleChange}
            />
            {!edit &&
                <button
                    className="hover:cursor-pointer hover:text-blue-500 font-bold p-3 rounded-md"
                    type="button"
                    onClick={() => setEdit(true)}>
                    EDIT
                </button>           
            }
            {
                !createNew &&
                <button
                    className="hover:cursor-pointer hover:text-blue-500 font-bold p-3 rounded-md"
                    type="button"
                    onClick={() => alert("DELETE")}
                >
                    DELETE
                </button>
            }
            { edit &&
                <div className="space-x-4">
                    { !createNew &&
                        <button
                            className="hover:cursor-pointer text-gray-500 hover:text-gray-700 font-bold p-3"
                            onClick={() => handleCancel()}>CANCEL</button>
                    }
                    <button
                        className="hover:cursor-pointer hover:text-blue-500 font-bold p-3"
                        type="submit">SUBMIT</button>
                </div>
            }
        </form>
    );
}

export default CareerHistoryForm