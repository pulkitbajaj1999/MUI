import { forwardRef, useState } from 'react'
import { Alert, Box, Button, Snackbar } from '@mui/material'
import { Error } from '@mui/icons-material'

const SnackbarAlert = forwardRef((props: any, ref: any) => {
  return <Alert ref={ref} {...props} />
})
export default function MuiSnackbar() {
  const [open1, setOpen1] = useState<boolean>(false)
  const [open2, setOpen2] = useState<boolean>(false)
  const [open3, setOpen3] = useState<boolean>(false)

  const handleCloseSnackbar = (e: any, reason?: any) => {
    console.log(reason)
    setOpen1(false)
  }

  const handleCloseSnackbar2 = (e: any, reason: any) => {
    console.log(reason)
    setOpen2(false)
  }
  return (
    <Box m={4}>
      <Button onClick={() => setOpen1(true)}>open1</Button>
      <Button onClick={() => setOpen2(true)}>open2</Button>
      <Button onClick={() => setOpen3(true)}>open3</Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open1}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          icon={<Error fontSize="inherit" />}
        >
          This is error
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open2}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar2}
      >
        <SnackbarAlert
          elevation={4}
          severity="error"
          onClose={handleCloseSnackbar2}
        >
          this is error snack
        </SnackbarAlert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        message={'This is integrated message'}
        open={open3}
        autoHideDuration={4000}
        color="primary"
        onClose={(e, reason) => setOpen3(false)}
      />
    </Box>
  )
}
