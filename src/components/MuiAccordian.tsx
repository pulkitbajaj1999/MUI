import React, { useState } from 'react'
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

export default function MuiAccordian() {
  const [expandedPanel, setExpandedPanel] = useState<any>()
  const handleExpansion = (isExpanded: boolean, name: String) => {
    if (isExpanded) setExpandedPanel(name)
    else setExpandedPanel(null)
  }
  return (
    <Box width="500px">
      {['panel1', 'panel2', 'panel3'].map((name, i) => (
        <Accordion
          key={name}
          expanded={expandedPanel === name}
          onChange={(e, isExpanded) => handleExpansion(isExpanded, name)}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h5" fontWeight="bold">
              {name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" fontSize="20px" textAlign="left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus iusto et laborum distinctio, dolorum vel asperiores
              sequi incidunt saepe, nostrum impedit odio ut libero nisi vero
              architecto quas tempore voluptatum.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}
