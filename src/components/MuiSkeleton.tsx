import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

// export default function MuiSkeleton() {
//   return (
//     <Stack width="250px" m={4} spacing={2}>
//       <Skeleton></Skeleton>
//       <Skeleton variant="circular" width="40px" height="40px"></Skeleton>
//       <Skeleton
//         animation="wave"
//         variant="rectangular"
//         width="250px"
//         height="125px"
//       ></Skeleton>
//     </Stack>
//   )
// }

export default function MuiSkeleton() {
  const [loading, setLoading] = useState<any>(true)
  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 2000)
  //   return () => clearTimeout(timer)
  // }, [])
  console.log('loading', loading)
  return (
    <Stack m={4}>
      {loading && (
        <Skeleton sx={{ height: '144px', width: '256px' }}></Skeleton>
      )}
      <Box
        component="img"
        src="https://source.unsplash.com/random/256x144"
        width="256px"
        height="144px"
        alt="unsplash"
        display={loading ? 'none' : 'block'}
        onLoad={() => setLoading(false)}
      />

      <Stack
        direction="row"
        spacing={1}
        sx={{ width: '100%', marginTop: '10px' }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width="40px"
            height="40px"
            animation="wave"
          ></Skeleton>
        ) : (
          <Avatar>PB</Avatar>
        )}
      </Stack>
      <Stack width="80%">
        <Typography variant="body1">
          {loading ? (
            <Skeleton variant="text" width="100%"></Skeleton>
          ) : (
            `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit adipisci perferendis a, repudiandae repellendus soluta vero natus illo animi aliquid modi pariatur. Explicabo in, sint beatae facilis ab labore maiores.`
          )}
        </Typography>
      </Stack>
    </Stack>
  )
}
