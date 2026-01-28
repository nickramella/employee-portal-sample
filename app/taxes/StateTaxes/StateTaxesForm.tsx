import FormField from "@/components/FormField";
import { addStateTaxInfo, deleteCareerHistory, updateStateTaxInfo } from "@/lib/rootSlice";
import { StateTax } from "@/types/StateTax";
import { useFormik } from "formik";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

interface StateTaxesFormProps {
    stateTaxInfo: any;
    createNew?: boolean;
    handleClose?: () => void;
}

const StateTaxesForm = ({stateTaxInfo, createNew, handleClose}: StateTaxesFormProps) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(createNew ? true : false);
    const initialValues = {
        state: stateTaxInfo.state,
        deductions: stateTaxInfo.deductions,
        key: stateTaxInfo.key,
    }
    const formik = useFormik({
        initialValues: initialValues,
        // validationSchema: validationSchema,
        onSubmit: values => {
            if (createNew && handleClose) {
                dispatch(addStateTaxInfo({...values, new: false, key: crypto.randomUUID()}));
                handleClose();
            }
            else {
                dispatch(updateStateTaxInfo({key: stateTaxInfo.key, values: values}))
            }
            setEdit(false);
        },
    });

    const handleCancel = () => {
        formik.resetForm({values: initialValues});
        setEdit(false);
    }

    useEffect(() => {
        if (createNew) console.log("Work Details", stateTaxInfo)
    }, [stateTaxInfo])

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormField
                label="State"
                id="state"
                type="text"
                value={formik.values.state}
                disabled={!edit}
                handleChange={formik.handleChange}
            />
            <FormField
                label="Deductions"
                id="deductions"
                type="number"
                value={formik.values.deductions ?? 0}
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
                    onClick={() => dispatch(deleteCareerHistory(stateTaxInfo.key))}
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

export default StateTaxesForm