import { Box, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import { getPostTitlesandSlugs } from './data'

export default async function Page() {
  const posts = await getPostTitlesandSlugs()

  const postsByYear = posts.reduce<Record<number, any[]>>((acc, post) => {
    const year = new Date(post.date).getFullYear()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  }, {})

  return (
    <Box sx={{ ml: 'auto', mr: 'auto', maxWidth: 850 }}>
      <h1>Blog Posts</h1>
      {Object.keys(postsByYear).sort(
        (a, b) => Number(b) - Number(a)).map((year) => (
          <Box key={year}>
            <h2>{year}</h2>
            <List>
              {postsByYear[Number(year)].map(
                ({ title, date, slug }) => {
                  const formattedDate = new Date(date).toLocaleDateString(
                    'en-US', { day: 'numeric', month: 'long' }
                  )
                  return (
                    <ListItemButton
                      key={slug}
                      component="a"
                      href={`/blog/${slug}`}
                      sx={{
                        '&:hover': {
                          '.MuiTypography-root': {
                            color: '#284178',
                          }
                        }
                      }}
                    >
                      <ListItemText
                        primary={<Typography variant="h6" sx={{ color: '#AF5D63' }}>{title}</Typography>}
                        secondary={<time>{formattedDate}</time>}
                      />
                    </ListItemButton>
                  )
                }
              )}
            </List>
          </Box>
      ))
    }
    </Box>
  )
}
