import { Box } from '@mui/material'
import About from '@/public/about.mdx'

export default function Page() {
  return (
    <Box sx={{ ml: 'auto', mr: 'auto', maxWidth: 850 }}>
      <About />
    </Box>
  )
}
