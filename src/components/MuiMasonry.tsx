import { Masonry } from '@mui/lab'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from '@mui/material'

const heights = [50, 80, 100, 30, 130, 70, 60, 100]

export default function MuiMasonry() {
  return (
    <Box width="500px" height="300px" overflow="scroll" m={4}>
      <Masonry columns={3} spacing={3}>
        {heights.map((height: any, i) => (
          <Paper sx={{ bgcolor: '#eeeeee' }}>
            <Accordion sx={{ minHeight: height, bgcolor: 'inherit' }}>
              <AccordionSummary>Accordion {i + 1}</AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  voluptates.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  )
}
