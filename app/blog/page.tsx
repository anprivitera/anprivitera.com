import { Box } from '@mui/material'
import { getPostsMetadata, getTags } from './data'
import BlogTabs from './tabs'

export default async function Page() {
  const posts = await getPostsMetadata()
  const tags = await getTags()

  return (
    <Box sx={{ ml: 'auto', mr: 'auto', maxWidth: 850 }}>
      <h1 style={{ marginBottom: 0 }}>
        Blog
      </h1>
      <BlogTabs posts={posts} tags={tags} />
    </Box>
  )
}
