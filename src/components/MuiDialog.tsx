import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import React, { useState } from 'react'

export default function MuiDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Dialog header</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At amet
            voluptates veritatis itaque, magnam tempora suscipit! Sunt laborum
            itaque sequi labore? Doloribus dolores ea modi nihil harum facilis
            commodi quis.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
