import TypographyComp from './components/TypographyComp'
import MuiButton from './components/MuiButton'
import MuiButtonGroup from './components/MuiButtonGroup'
import MuiTextField from './components/MuiTextField'
import MuiSelect from './components/MuiSelect'
import MuiRadio from './components/MuiRadio'
import MuiCheckbox from './components/MuiCheckbox'
import MuiSwitch from './components/MuiSwitch'
import MuiRating from './components/MuiRating'
import MuiAutocomplete from './components/MuiAutocomplete'
import Layout from './components/Layout'
import MuiCard from './components/MuiCard'
import MuiAccordian from './components/MuiAccordian'
import MuiImagelist from './components/MuiImagelist'
import MuiNavbar from './components/MuiNavbar'
import MuiBreadcrumb from './components/MuiBreadcrumb'
import MuiDrawer from './components/MuiDrawer'
import MuiSpeeddial from './components/MuiSpeedDial'
import MuiBottomNav from './components/MuiBottomNav'
import MuiAvatar from './components/MuiAvatar'
import MuiBadge from './components/MuiBadge'
import MuiList from './components/MuiList'
import MuiChip from './components/MuiChipToolkit'
import MuiTable from './components/MuiTable'
import MuiAlert from './components/MuiAlert'
import MuiSnackbar from './components/MuiSnackbar'
import MuiDialog from './components/MuiDialog'
import MuiProgress from './components/MuiProgress'
import MuiSkeleton from './components/MuiSkeleton'
import MuiTabs from './components/MuiTabs'
import MuiTimeline from './components/MuiTimeline'
import MuiMasonry from './components/MuiMasonry'
import { Box, Paper } from '@mui/material'

import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    secondary: {
      main: '#ea80fc',
    },
    background: {
      default: '#eeeeee',
      paper: '#eeeeee',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MuiNavbar />
        <Box
          sx={{
            bgcolor: 'secondary.main',
            // background: 'background.default',
            width: '100px',
            height: '200px',
            m: 4,
          }}
        ></Box>
        <Paper
          sx={{
            height: '200px',
            width: '100px',
          }}
        ></Paper>
        {/* <MuiMasonry /> */}
        {/* <MuiBadge /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeeddial /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBottomNav /> */}
      </div>
    </ThemeProvider>
  )
}

export default App
