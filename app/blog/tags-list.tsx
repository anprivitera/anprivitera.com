import { List, ListItemButton, ListItemText, Typography } from '@mui/material'
// import Link from 'next/link'

export default function TagsList({ tags }: { tags: string[] }) {
  return (
    <>
      <List>
        {tags.map((tag) => (
          <ListItemButton
            key={tag}
            component="a"
            href={`/blog/tags/${tag}`}
            sx={{
              '&:hover': {
                '.MuiTypography-root': {
                  color: '#284178',
                }
              },
            }}
          >
            <ListItemText
              primary={
                <Typography sx={{ color: '#AF5D63' }}>
                  {tag}
                </Typography>
              }
            />
          </ListItemButton>
        )
        )}
      </List>
    </>
  )
}
