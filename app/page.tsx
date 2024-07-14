import { Box } from '@mui/material'
import About from '@/blog-content/about.mdx'

export default function Page() {
  return (
    <Box sx={{ ml: 'auto', mr: 'auto', maxWidth: 680 }}>
      <About />
    </Box>
  )
}
