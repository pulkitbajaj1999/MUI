import React, { useState } from 'react'

import { Box, TextField, MenuItem } from '@mui/material'

export default function MuiSelect() {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState<any>([])
  return (
    <Box width="250px">
      <TextField fullWidth select onChange={(e) => setCountry(e.target.value)}>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
      <TextField
        fullWidth
        select
        value={countries}
        SelectProps={{ multiple: true }}
        onChange={(e) => setCountries(e.target.value)}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  )
}
