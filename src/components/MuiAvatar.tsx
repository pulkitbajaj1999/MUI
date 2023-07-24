import React from 'react'
import { Avatar, AvatarGroup, Stack } from '@mui/material'
export default function MuiAvatar() {
  const p1 = 'https://randomuser.me/api/portraits/women/79.jpg'
  const p2 = 'https://randomuser.me/api/portraits/women/80.jpg'
  const p3 = 'https://randomuser.me/api/portraits/women/81.jpg'
  const p4 = 'https://randomuser.me/api/portraits/women/82.jpg'
  const p5 = 'https://randomuser.me/api/portraits/women/83.jpg'
  return (
    <Stack spacing={4} m={4}>
      <Stack direction="row" spacing={1}>
        <Avatar>BW</Avatar>
        <Avatar>PB</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ width: '48px', height: '48px' }} src={p1} alt="Jane" />
          <Avatar src={p2} alt="Jane" />
          <Avatar src={p3} alt="Jane" />
          <Avatar src={p4} alt="Jane" />
          <Avatar src={p5} alt="Jane" />
        </AvatarGroup>
      </Stack>
    </Stack>
  )
}
