import { ListItemButton, ListItemText, Typography } from '@mui/material'

type PostListItemProps = {
  title: string
  date: string
  slug: string
}

export default function PostListItem({ title, date, slug }: PostListItemProps) {
  const formattedDate = new Date(date).toLocaleDateString(
    'en-US', { day: 'numeric', month: 'long', year: 'numeric' }
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
        primary={
          <Typography sx={{ color: '#AF5D63' }}>
            {title}
          </Typography>
        }
        secondary={<time>{formattedDate}</time>}
      />
    </ListItemButton>
  )
}
