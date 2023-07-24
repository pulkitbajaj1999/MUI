import React from 'react'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import { Mail, Inbox, Send, CopyAll } from '@mui/icons-material'
export default function MuiSpeeddial() {
  return (
    <SpeedDial
      sx={{
        position: 'absolute',
        bottom: '16px',
        right: '16px',
      }}
      ariaLabel=""
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction icon={<Send />} />
      <SpeedDialAction icon={<Mail />} />
      <SpeedDialAction icon={<CopyAll />} />
    </SpeedDial>
  )
}
