import React, { useState } from 'react'

import { Box, Switch, FormControl, FormControlLabel } from '@mui/material'

export default function MuiSwitch() {
  const [enableDark, setEnableDark] = useState(false)
  return (
    <Box>
      <FormControlLabel
        label="Dark"
        control={
          <Switch
            color="success"
            checked={enableDark}
            onChange={(e) => setEnableDark(e.target.checked)}
          />
        }
      />
    </Box>
  )
}
