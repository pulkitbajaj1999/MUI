import React, { useMemo, useState } from 'react'

import { Stack, Autocomplete, TextField } from '@mui/material'

export default function MuiAutocomplete() {
  const skills = ['Javascript', 'Typescript', 'React', 'Node', 'Python']
  const skillsObj = skills.map((skill, i) => ({ id: i, label: skill }))
  const [value, setValue] = useState<any>(null)
  const [skill, setSkill] = useState<any>(null)
  console.log(skill)
  return (
    <Stack width="250px" margin={2} spacing={2}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={(e, val) => setValue(val)}
        freeSolo
      />
      <Autocomplete
        isOptionEqualToValue={(option, value) => {
          return option.id === value.id
        }}
        options={skillsObj}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={skill}
        onChange={(e, val) => setSkill(val)}
      />
    </Stack>
  )
}
