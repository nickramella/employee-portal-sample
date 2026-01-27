"use client";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";

interface WidgetProps {
    title: string;
    expanded?: boolean;
    children?: React.ReactNode;
}

const Widget: React.FC<React.PropsWithChildren<WidgetProps>> = ({title, expanded=true, children}: WidgetProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(expanded);
  return (
    <div className="w-full">
        <Accordion expanded={isOpen} onChange={() => setIsOpen(!isOpen)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span" sx={{fontWeight: 700}}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default Widget