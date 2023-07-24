import { Stack, Button, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Button</Button>
        <Button variant="contained" disableElevation>
          DisableElevation
        </Button>
        <Button variant="contained" disableRipple>
          DisableRipple
        </Button>
        <Button variant="contained" disableRipple disableFocusRipple>
          DisableFocusRipple
        </Button>
        <IconButton disableFocusRipple>
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
}

export default MuiButton
