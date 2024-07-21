import React from 'react'
import { Box } from '@mui/material'
import { getTags } from './data'

export async function generateStaticParams() {
  const tags = await getTags()
  return tags.map((tag) => ({ tag }))
}

export default function Page({ params }: { params: { tag: string } }) {
  const { tag } = params
  return (
    <Box sx={{ ml: 'auto', mr: 'auto', maxWidth: 850 }}>
      <h1>Posts tagged <i>{ tag }</i></h1>
    </Box>
  )
}
