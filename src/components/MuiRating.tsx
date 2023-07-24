import React, { useState } from 'react'

import { Stack, Rating } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'

export default function MuiRating() {
  const [rating, setRating] = useState<any>(1)
  return (
    <Stack spacing={2} margin={4}>
      <Rating
        precision={0.5}
        icon={<Favorite color="success" />}
        emptyIcon={<FavoriteBorder />}
        value={rating}
        onChange={(e, val) => setRating(val)}
      />
    </Stack>
  )
}
