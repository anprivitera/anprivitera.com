import Blog from '@/content/blog.mdx'
import { getPostTitlesandSlugs } from './data'

export default async function Page() {
  const posts = await getPostTitlesandSlugs()
  return (
    <>
      <Blog />
      {
        posts.map(({ title, slug }) => (
          <div key={slug}>
            <a href={`/blog/${slug}`}>{title}</a>
          </div>
        ))
      }
    </>
  )
}
