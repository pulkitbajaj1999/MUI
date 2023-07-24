import React, { useState } from 'react'

import {
  Box,
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material'

export default function MuiRadio() {
  const [experience, setExperience] = useState('')

  return (
    <Box width="250px" margin={2}>
      <FormControl>
        <FormLabel id="experience-radio-group-label">
          Select your experience
        </FormLabel>
        <RadioGroup
          name="experience-radio-group"
          row
          onChange={(e) => {
            console.log(e.target.value)
          }}
        >
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}
