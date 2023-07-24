import React from 'react'

import { Box, Stack, Divider, Grid, Paper } from '@mui/material'
export default function Layout() {
  return (
    <>
      {/* <Stack
        border="1px solid"
        direction="row"
        spacing={2}
        divider={<Divider flexItem orientation="vertical" />}
      >
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding: '16px',
            '&:hover': {
              backgroundColor: 'primary.light',
              color: '#fafafac4',
            },
          }}
        >
          this is first
        </Box>
        <Box
          width="100px"
          height="100px"
          display="flex"
          bgcolor="success.light"
          p={'16px'}
        >
          this is second
        </Box>
      </Stack>
      <Grid
        container
        border="1px solid"
        my="16px"
        rowSpacing="80px"
        columnSpacing="32px"
      >
        <Grid item xs={12} sm={6} md={4} lg={3} bgcolor="#3af1b4">
          <Box height="100px" bgcolor="red">
            box1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} bgcolor="#b6e85a">
          <Box height="100px" bgcolor="yellow">
            box2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} bgcolor="#fab868">
          <Box height="100px" bgcolor="green">
            box3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} bgcolor="#6374f2">
          <Box height="200px" bgcolor="primary.main">
            box4
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} bgcolor="#1be4bc">
          <Box height="100px" bgcolor="secondary.main">
            box5
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} bgcolor="#f482d6">
          <Box height="100px" bgcolor="grey">
            box6
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={6} bgcolor="rgb(235, 54, 54)">
          <Box height="100px" bgcolor="orange">
            box7
          </Box>
        </Grid>
      </Grid> */}
      <Paper elevation={4}>
        <Box height="90vh" width="100%"></Box>
      </Paper>
    </>
  )
}
