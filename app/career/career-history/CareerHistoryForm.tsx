import FormField from "@/components/FormField";
import { addCareerHistory, deleteCareerHistory, updateCareerHistory } from "@/lib/rootSlice";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

interface CareerHistoryFormProps {
    workDetails: any;
    createNew?: boolean;
    handleClose?: () => void;
}

const CareerHistoryForm = ({workDetails, createNew, handleClose}: CareerHistoryFormProps) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(createNew ? true : false);
    const initialValues = {
            company: workDetails.company,
            location: workDetails.location,
            description: workDetails.description,
            salary: workDetails.salary,
    }
    const formik = useFormik({
        initialValues: initialValues,
        // validationSchema: validationSchema,
        onSubmit: values => {
            if (createNew && handleClose) {
                dispatch(addCareerHistory({...values, new: false, key: crypto.randomUUID()}));
                handleClose();
            }
            else {
                dispatch(updateCareerHistory({key: workDetails.key, values: values}))
            }
            setEdit(false);
        },
    });

    const handleCancel = () => {
        formik.resetForm({values: initialValues});
        setEdit(false);
    }

    useEffect(() => {
        if (createNew) console.log("Work Details", workDetails)
    }, [workDetails])

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
                label="Description"
                id="description"
                type="text"
                value={formik.values.description}
                disabled={!edit}
                handleChange={formik.handleChange}
            />
            <FormField
                label="Salary"
                id="salary"
                type="number"
                value={formik.values.salary}
                disabled={!edit}
                handleChange={formik.handleChange}
            />
            { !edit &&
                <button
                    className="hover:cursor-pointer hover:text-blue-500 font-bold p-3 rounded-md"
                    type="button"
                    onClick={() => setEdit(true)}>
                    EDIT
                </button>           
            }
            { !createNew &&
                <button
                    className="hover:cursor-pointer hover:text-blue-500 font-bold p-3 rounded-md"
                    type="button"
                    onClick={() => dispatch(deleteCareerHistory(workDetails.key))}
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