import { Stack, TextField, InputAdornment } from '@mui/material'
import React, { useState } from 'react'

export default function MuiTextField() {
  const [password, setPassword] = useState('')
  return (
    <Stack spacing={10} margin={2}>
      {/* <Stack direction="column" width="max-content" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="standard" color="secondary" />
        <TextField label="Name" variant="filled" />
      </Stack> */}
      <Stack direction="column" width="max-content" spacing={2}>
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          required
          helperText="this is helper text"
        />
        <TextField
          label="Password"
          variant="standard"
          size="small"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required
          error={!password}
          helperText={!password ? 'choose a strong password' : ''}
          type="password"
        />
        <TextField
          label="Read Only"
          variant="filled"
          size="small"
          inputProps={{ readOnly: true }}
          value="soifjo"
        />
      </Stack>
      <Stack direction="column" width="max-content" spacing={2}>
        <TextField
          label="price"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  )
}
