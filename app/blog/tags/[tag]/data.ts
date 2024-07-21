import { readdirSync } from 'fs'

export async function getTags () {
  const fileList = readdirSync('./public/posts')
  const tags: string[] = []
  const checks = await Promise.all(
    fileList.map(async (f) => {
      const file = await import(`@/public/posts/${f}`)
      return file.metadata.tags
    })
  )
  checks.forEach((tagList) => {
    tagList.forEach((tag: string) => {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    })
  })
  return tags
}

export async function getPostsByTag (tag: string) {
  const fileList = readdirSync('./public/posts')
  const posts = await Promise.all(
    fileList.map(async (f) => {
      const file = await import(`@/public/posts/${f}`)
      if (file.metadata.tags.includes(tag)) {
        return {
          title: file.metadata.title,
          date: file.metadata.date,
          slug: f.substring(0, f.lastIndexOf('.')) || f
        }
      }
      return null
    })
  )
  return posts.filter((post) => post !== null)
}
