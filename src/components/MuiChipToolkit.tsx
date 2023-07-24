import React, { useState } from 'react'

import { Box, Stack, Chip, Avatar, Tooltip, IconButton } from '@mui/material'
import { Delete, Edit, Face, Mail } from '@mui/icons-material'
export default function MuiChip() {
  const [chips, setChips] = useState<String[]>(['chip1', 'chip2', 'chip3'])
  const handleDeleteChip = (deletedChip: any) => {
    setChips(chips.filter((chip) => chip !== deletedChip))
  }
  return (
    <Box m={10} display="flex" flexDirection="column" gap={5}>
      <Stack direction="row" spacing={2}>
        <Chip icon={<Face />} label="Chip" color="primary" />
        <Chip
          icon={<Face />}
          label="Oulined"
          variant="outlined"
          color="secondary"
          onClick={() => {
            alert('clicked')
          }}
        />
        <Chip
          avatar={<Avatar>PB</Avatar>}
          label="avatar"
          variant="outlined"
          color="secondary"
          onClick={() => {
            alert('clicked')
          }}
          onDelete={() => {
            alert('delete')
          }}
        />
        <Chip size="small" icon={<Mail />} label="small" color="success" />
      </Stack>
      <Stack direction="row" spacing={1}>
        {chips.map((chip: any, i: Number) => (
          <Chip
            key={chip}
            label={chip}
            onDelete={handleDeleteChip.bind(null, chip)}
          />
        ))}
      </Stack>
      <Stack direction="row" spacing={1}>
        <Tooltip title="delete" placement="right" color="error" arrow>
          <IconButton size="large">
            <Delete />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit" placement="right" color="info" arrow>
          <IconButton>
            <Edit />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  )
}
