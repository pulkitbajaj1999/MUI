import React, { useState } from 'react'

import { Alert, AlertTitle, Stack, Typography } from '@mui/material'
import { Error } from '@mui/icons-material'
export default function MuiAlert() {
  const [showError, setShowError] = useState(true)
  return (
    <Stack m={2} spacing={8}>
      <Stack spacing={2}>
        <Typography>Default Variant</Typography>
        <Alert severity="success">This is success</Alert>
        <Alert severity="info">This is info</Alert>
        <Alert severity="warning">This is warning</Alert>
        {showError && (
          <Alert
            severity="error"
            icon={<Error fontSize="inherit" />}
            onClose={() => setShowError(false)}
          >
            This is error
          </Alert>
        )}
      </Stack>

      <Stack spacing={2}>
        <Typography>Oulined Variant</Typography>
        <Alert variant="outlined" severity="success">
          This is success
        </Alert>
        <Alert variant="outlined" severity="info">
          This is info
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is warning
        </Alert>
        <Alert variant="outlined" severity="error">
          This is error
        </Alert>
      </Stack>

      <Stack spacing={2}>
        <Typography>Filled Variant</Typography>
        <Alert variant="filled" severity="success">
          <AlertTitle>Success</AlertTitle>
          This is success
        </Alert>
        <Alert variant="filled" severity="info">
          <AlertTitle>Info</AlertTitle>
          This is info
        </Alert>
        <Alert variant="filled" severity="warning">
          This is warning
        </Alert>
        <Alert variant="filled" severity="error">
          This is error
        </Alert>
      </Stack>
    </Stack>
  )
}
