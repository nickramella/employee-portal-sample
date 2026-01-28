"use client";
import Widget from '@/components/Widget';
import { selectStateTaxInfo } from '@/lib/rootSlice';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Box, Modal } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import StateTaxesForm from './StateTaxesForm';
import { StateTax } from '@/types/StateTax';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  overflow: "scroll",
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  color: "black"
};

const StateTaxesWidget = () => {
    const stateTaxes = useSelector(selectStateTaxInfo);
    const [displayedValues, setDisplayedValues] = useState<StateTax[]>();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (stateTaxes) {
            setDisplayedValues(stateTaxes.filter((value) => value.key !== "0"))
        }
    }, [stateTaxes]);
    return (
        <Widget title="State Tax Information">
            {displayedValues &&
                <>
                    {displayedValues.map((value) => {
                        return (
                            <div key={value.key} className="border-b border-gray-500">
                                <StateTaxesForm stateTaxInfo={value} />
                            </div>
                        )
                    })}
                </>
            }
            <button onClick={handleOpen} className="hover:cursor-pointer hover:text-blue-500 font-bold p-3">ADD STATE TAX INFORMATION</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="px-6 py-3 flex justify-between items-center bg-blue-400">
                        <h1 className="font-bold text-xl">Work Experience</h1>
                        <button aria-label="Close Modal" onClick={handleClose} className="hover:cursor-pointer"><CloseIcon /></button>
                    </div>
                    <div className="p-3">
                        <StateTaxesForm stateTaxInfo={stateTaxes[0]} createNew={true} handleClose={handleClose}/>
                    </div>
                </Box>
            </Modal>
        </Widget>
    )
}

export default StateTaxesWidget