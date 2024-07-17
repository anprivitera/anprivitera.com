import { Box } from '@mui/material'
import Blog from '@/public/blog.mdx'
import { getPostTitlesandSlugs } from './data'

export default async function Page() {
  const posts = await getPostTitlesandSlugs()
  return (
    <Box sx={{ ml: 'auto', mr: 'auto', maxWidth: 850 }}>
      <Blog />
      {
        posts.map(({ title, slug }) => (
          <div key={slug}>
            <a href={`/blog/${slug}`}>{title}</a>
          </div>
        ))
      }
    </Box>
  )
}
