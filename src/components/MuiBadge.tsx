import { Badge, Box, Stack } from '@mui/material'
import React from 'react'

import { Mail, Message } from '@mui/icons-material'
export default function MuiBadge() {
  return (
    <Stack m={8} spacing={2} direction="row">
      <Badge badgeContent={4} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={0} showZero color="success">
        <Message />
      </Badge>

      <Badge badgeContent={100} color="success">
        <Message />
      </Badge>
      <Badge variant="dot" color="success">
        <Message />
      </Badge>
    </Stack>
  )
}
