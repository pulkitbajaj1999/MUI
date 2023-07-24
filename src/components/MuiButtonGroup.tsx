import React, { useState } from 'react'

import {
  Stack,
  Button,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material'

import { FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material'

const MuiButtonGroup = () => {
  const [formats, setFormats] = useState(['bold'])

  return (
    <Stack spacing={3} margin={2}>
      <Stack spacing={2} direction="row">
        <ButtonGroup
          disableRipple
          variant="outlined"
          orientation="vertical"
          size="large"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={2} direction="row">
        <ButtonGroup variant="contained" disableRipple>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          size="small"
          orientation="vertical"
          exclusive
          value={formats}
          onChange={(e, formats) => {
            console.log('formats', formats)
            setFormats(formats)
          }}
        >
          <ToggleButton value="bold" disableRipple>
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" disableRipple>
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined" disableRipple>
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

export default MuiButtonGroup
