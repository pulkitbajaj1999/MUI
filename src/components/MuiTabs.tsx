import { Box, Tab, Tabs } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import React, { useState } from 'react'
import { Favorite, Home, Person } from '@mui/icons-material'
export default function MuiTabs() {
  const [currentTab, setCurrentTab] = useState<String>('1')
  const [tab, setTab] = useState<string>('1')
  return (
    <Box m={4}>
      <Tabs value={currentTab} onChange={(e, val) => setCurrentTab(val)}>
        <Tab label="tab1" value="1" />
        <Tab label="tab2" value="2" />
        <Tab label="tab3" value="3" />
      </Tabs>

      <TabContext value={tab}>
        <TabList
          onChange={(e, val) => setTab(val)}
          textColor="secondary"
          variant="fullWidth"
          centered
          indicatorColor="secondary"
        >
          <Tab
            label="tab1"
            value="1"
            icon={<Favorite />}
            iconPosition="start"
          />
          <Tab label="tab2" value="2" icon={<Person />} iconPosition="top" />
          <Tab label="tab3" value="3" icon={<Home />} iconPosition="end" />
          <Tab label="tab4" value="4" icon={<Home />} iconPosition="end" />
          <Tab label="tab5" value="5" icon={<Home />} iconPosition="end" />
          <Tab label="tab6" value="6" icon={<Home />} iconPosition="end" />
          <Tab
            label="tab7"
            value="7"
            icon={<Home />}
            iconPosition="end"
            disabled
          />
        </TabList>
        <TabPanel value="1">this is panel1</TabPanel>
        <TabPanel value="2">this is panel2</TabPanel>
      </TabContext>
    </Box>
  )
}
