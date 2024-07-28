import { Box, Typography } from '@mui/material'

export default function NotFound() {
  return (
    <Box>
      <h1>Page not found</h1>
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        The page you are looking for does not exist.
      </Typography>
    </Box>
  )
}
