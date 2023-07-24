import React, { useState } from 'react'

import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from '@mui/material'
import { Bookmark, BookmarkBorder } from '@mui/icons-material'
export default function MuiCheckbox() {
  const [accepted, setAccepted] = useState<any>(false)

  const [skills, setSkills] = useState<any>([])

  console.log('skills', skills)
  const handleSkillChange = (e: any) => {
    const val = e.target.value
    if (skills.includes(val))
      setSkills(skills.filter((skill: any) => skill !== val))
    else setSkills([...skills, val])
  }

  return (
    <Box margin={2}>
      <Box width="250px">
        <FormControlLabel
          label="I accept all terms"
          control={
            <Checkbox
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
          }
        />
        <Checkbox
          checked={accepted}
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          onChange={(e) => setAccepted(e.target.checked)}
        />
      </Box>

      <Box width="400px">
        <FormControl fullWidth>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="html"
              control={<Checkbox value="html" onChange={handleSkillChange} />}
            />
            <FormControlLabel
              label="css"
              control={<Checkbox value="css" onChange={handleSkillChange} />}
            />
            <FormControlLabel
              label="javascript"
              control={
                <Checkbox value="javascript" onChange={handleSkillChange} />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  )
}
