import { readdirSync } from 'fs'

async function getPosts() {
  const files = readdirSync('./public/posts')

  const posts = await Promise.all(
    files.map(async (f) => {
      const post = await import(`@/public/posts/${f}`)
      return { slug: f, post }
    })
  )

  return posts
}

export async function getTags() {
  const posts = await getPosts()

  const tags: string[] = []
  posts.forEach(({ post }) => {
    post.metadata.tags.forEach((tag: string) => (
      !tags.includes(tag) && tags.push(tag)
    ))
  })

  return tags
}

export async function getPostsByTag (tag:string) {
  const posts = await getPosts()

  return posts.filter(({ post }) => (
    post.metadata.tags.includes(tag)
  )).map(({ post, slug }) => {
    const { metadata } = post
    const { title, date } = metadata
    return { title, date, slug: slug.substring(0, slug.lastIndexOf('.')) || slug }
  })
}
