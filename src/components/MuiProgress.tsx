import {
  Box,
  CircularProgress,
  Grid,
  LinearProgress,
  Stack,
} from '@mui/material'
import React from 'react'

export default function MuiProgress() {
  return (
    <Stack direction="column" m={4} spacing={4}>
      <Stack direction="row" spacing={3}>
        <CircularProgress />
        <CircularProgress variant="determinate" value={50} />
      </Stack>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <LinearProgress />
        </Grid>
        <Grid item md={6}>
          <LinearProgress variant="determinate" value={50} />
        </Grid>
      </Grid>
    </Stack>
  )
}
