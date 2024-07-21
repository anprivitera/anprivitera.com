import { List } from '@mui/material'
import PostListItem from './list-item'

type Post = {
  title: string
  date: string
  slug: string
}

type PostsListProps = {
  posts: Post[]
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <>
      <h1>Blog</h1>
      <List>
        {posts.map(
          ({ title, date, slug }) => (
            <PostListItem key={slug}
              title={title}
              date={date}
              slug={slug}
            />
          )
        )}
      </List>
    </>
  )
}
