import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab'
import { Box } from '@mui/material'

export default function MuiTimeline() {
  const events = []
  for (let i = 0; i < 10; i++) {
    events.push('this is event' + (i + 1))
  }

  return (
    <Box width={'400px'}>
      <Timeline position="left">
        {events.map((event, i) => (
          <TimelineItem>
            <TimelineOppositeContent>10:00 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              {i < events.length - 1 && <TimelineConnector color="primary" />}
            </TimelineSeparator>
            <TimelineContent>{event}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  )
}
