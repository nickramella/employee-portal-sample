
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

interface WidgetProps {
    title: string;
    children?: React.ReactNode;
}

const Widget: React.FC<React.PropsWithChildren<WidgetProps>> = ({title, children}: WidgetProps) => {
  return (
    <div className="w-full">
        <Accordion>
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