import React from 'react'
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import { Mail } from '@mui/icons-material'

export default function MuiList() {
  return (
    <Box width="300px" bgcolor="#c7c9c3" m={4}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="Primary item-1" secondary="secondary text" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText>Mail</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}
