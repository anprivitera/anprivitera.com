'use client'

import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import PostsList from '@/app/components/posts-list'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number
  value: number
}

interface PostsListProps {
  posts: { title: string, date: string, slug: string }[]
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export default function BlogTabs({ posts }: PostsListProps) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Box>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Posts" />
          <Tab label="Tags" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PostsList posts={posts} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Tags
      </CustomTabPanel>
    </>
  )
}
