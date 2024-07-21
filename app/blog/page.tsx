import { Box, List, ListItemButton, ListItemText } from '@mui/material'
import { getPostTitlesandSlugs } from './data'

export default async function Page() {
  const posts = await getPostTitlesandSlugs()
  return (
    <Box sx={{ ml: 'auto', mr: 'auto', maxWidth: 850 }}>
      <h1>Blog Posts</h1>
      <List>
        {
        posts.map(({ title, date, slug }) => (
          <ListItemButton key={slug}
            component="a"
            href={`/blog/${slug}`}
          >
            <ListItemText
              primary={title}
              secondary={
                <time>
                  {new Date(date).toLocaleDateString(
                    'en-US', { dateStyle: 'long' }
                  )}
                </time>
              }
            />
          </ListItemButton>
        ))
      }
      </List>
    </Box>
  )
}
