import React from 'react'
import { Box } from '@mui/material'
import PostsList from '@/app/components/posts-list'
import { getPostsByTag, getTags } from './data'

export async function generateStaticParams() {
  const tags = await getTags()
  return tags.map((tag) => ({ tag }))
}

export default async function Page({ params }: { params: { tag: string } }) {
  const { tag } = params
  const posts = await getPostsByTag(tag)
  return (
    <Box sx={{ ml: 'auto', mr: 'auto', maxWidth: 850 }}>
      <h1>Posts tagged <i>{ tag }</i></h1>
      <PostsList posts={posts} />
    </Box>
  )
}
