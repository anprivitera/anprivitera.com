import { readdirSync } from 'fs'

export async function getPostTitlesandSlugs() {
  const fileList = readdirSync('./public/posts')
  const checks = await Promise.all(
    fileList.map(async (f) => {
      const file = await import(`@/public/posts/${f}`)
      return {
        title: file.metadata.title,
        slug: f.substring(0, f.lastIndexOf('.')) || f
      }
    })
  )
  return checks
}
