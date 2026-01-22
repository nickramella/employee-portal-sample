"use client"
import Widget from '@/components/Widget'
import { selectCareerHistory } from '@/lib/rootSlice'
import { Box, Modal } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CareerHistoryForm from './CareerHistoryForm';
import { CareerHistory } from '@/types/CareerHistory';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  overflow: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "15px",
  boxShadow: 24,
  color: "black"
};

const page = () => {
    const careerHistory = useSelector(selectCareerHistory);
    const [displayedValues, setDisplayedValues] = useState<CareerHistory[]>();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (careerHistory) {
            setDisplayedValues(careerHistory.filter((value) => value.key !== "0"))
        }
    }, [careerHistory])

    return (
        <Widget title="Career History">
            {displayedValues &&
                <>
                    {displayedValues.map((value, index) => {
                        return (
                            <CareerHistoryForm key={index} workDetails={value} />
                        )
                    })}
                </>
            }
            <button onClick={handleOpen} className='hover:cursor-pointer hover:text-blue-500 font-bold p-3'>ADD WORK EXPERIENCE</button>
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
                    <CareerHistoryForm workDetails={careerHistory[0]} />
                </Box>
            </Modal>
        </Widget>
    )
}

export default page