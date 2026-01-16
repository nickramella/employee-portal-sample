import React from 'react'

interface FormFieldProps {
    label: string,
    id: string,
    type: string,
    value: string,
    disabled: boolean,
    handleChange: (e: any) => void;
}

const FormField = ({label, id, type, value, disabled, handleChange}: FormFieldProps) => {
  return (
    <div className='flex justify-between space-x-4 p-3 items-center'>
        <label htmlFor={id} className='text-right min-w-[25%]'>{label}</label>
        <input
            id={id}
            name={id}
            type={type}
            onChange={handleChange}
            value={value}
            disabled={disabled}
            className='border border-gray-500 disabled:border-gray-300 disabled:cursor-not-allowed rounded-md p-1 w-full'
        />
    </div>
  )
}

export default FormField