import { Box } from '@mui/material'
import { getPostsMetadata } from './data'
import PostsList from './list'

export default async function Page() {
  const posts = await getPostsMetadata()

  return (
    <Box sx={{ ml: 'auto', mr: 'auto', maxWidth: 850 }}>
      <PostsList posts={posts} />
    </Box>
  )
}
