import { readdirSync } from 'fs'

export async function getTags() {
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
  return tags.sort((a, b) => a.localeCompare(b))
}
