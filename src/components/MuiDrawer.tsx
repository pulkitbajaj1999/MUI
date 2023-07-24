import React, { useState } from 'react'
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'

import { Menu, Inbox, Mail } from '@mui/icons-material'

export default function MuiDrawer() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Box>
      <IconButton onClick={() => setIsOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {drawerContent}
      </Drawer>
    </Box>
  )
}

const drawerContent = (
  <div>
    <Toolbar>
      <Typography variant="h6" component="div" textAlign="center">
        Side panel
      </Typography>
    </Toolbar>
    <Divider />
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <Inbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <Inbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </div>
)
