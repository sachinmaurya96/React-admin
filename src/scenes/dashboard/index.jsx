import React from 'react'
import Header from '../../components/Header'
import { Box } from '@mui/material'

function Dashboard() {
  return (
    <Box p="20px">
      <Box display="flex" justifyContent={"space-between"} alignItems={"center"}>
      <Header title="DASHBOARD" subtitle="welcome to your dashboard"/>
      </Box>
    </Box>
  )
}

export default Dashboard
