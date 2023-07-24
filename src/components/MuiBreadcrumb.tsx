import React from 'react'
import { Box, Breadcrumbs, Link } from '@mui/material'
import { NavigateNext } from '@mui/icons-material'
export default function MuiBreadcrumb() {
  return (
    <Box m={2}>
      <Breadcrumbs
        maxItems={4}
        itemsBeforeCollapse={1}
        itemsAfterCollapse={2}
        separator={<NavigateNext fontSize="small" />}
      >
        <Link href="#">home</Link>
        <Link href="1">setting</Link>
        <Link href="2">admin</Link>
        <Link href="3">home</Link>
        <Link href="4">display</Link>
        <Link href="5">last</Link>
      </Breadcrumbs>
    </Box>
  )
}
