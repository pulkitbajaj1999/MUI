import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import { Home, Person, Favorite } from '@mui/icons-material'

export default function MuiBottomNav() {
  const [value, setValue] = useState<any>(0)
  return (
    <BottomNavigation
      sx={{
        position: 'absolute',
        bottom: '0',
        width: '100%',
      }}
      value={value}
      onChange={(e, val) => setValue(val)}
    >
      <BottomNavigationAction icon={<Home />} label="Home" />
      <BottomNavigationAction icon={<Person />} label="Person" />
      <BottomNavigationAction icon={<Favorite />} label="Favorite" />
    </BottomNavigation>
  )
}
