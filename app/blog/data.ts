import { readdirSync } from 'fs'

export async function getPostsMetadata() {
  const fileList = readdirSync('./public/posts')
  const checks = await Promise.all(
    fileList.map(async (f) => {
      const file = await import(`@/public/posts/${f}`)
      return {
        title: file.metadata.title,
        slug: f.substring(0, f.lastIndexOf('.')) || f,
        date: file.metadata.date
      }
    })
  )
  return checks.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
