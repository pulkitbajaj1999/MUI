import React, { useState } from 'react'
import {
  Button,
  Stack,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material'

import { CatchingPokemon, KeyboardArrowDown } from '@mui/icons-material'

export default function MuiNavbar() {
  const [anchorEl, setAnchorEl] = useState<any>(null)
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemon fontSize="large" />
          </IconButton>
          <Typography variant="h5" flexGrow="1">
            POKEMON
          </Typography>
          <Stack direction="row" spacing="16px">
            <Button disableRipple color="inherit">
              about
            </Button>
            <Button disableRipple color="inherit">
              Login
            </Button>
            <Button
              disableRipple
              color="inherit"
              endIcon={<KeyboardArrowDown />}
              onClick={(e) => setAnchorEl(e.target)}
            >
              Resources
            </Button>
          </Stack>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleClose}>Podcast</MenuItem>
            <MenuItem onClick={handleClose}>Blog</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  )
}
