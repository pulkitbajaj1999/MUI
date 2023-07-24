import React from 'react'
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { users } from '../mock/users'

const config = [
  { label: 'ID', key: 'id' },
  { label: 'First Name', key: 'first_name' },
  { label: 'Last Name', key: 'last_name' },
  { label: 'Email', key: 'email' },
]
export default function MuiTable() {
  return (
    <Box m={4}>
      <TableContainer
        component={Paper}
        sx={{ bgcolor: 'aliceblue', maxHeight: '300px' }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {config.map((item: any, i: Number) => (
                <TableCell align={i === config.length - 1 ? 'center' : 'left'}>
                  {item.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user: any) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:first-child th': { border: 0 } }}
              >
                {config.map((item: any, i: Number) => (
                  <TableCell
                    align={i === config.length - 1 ? 'center' : 'left'}
                  >
                    {user[item.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
