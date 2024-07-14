import { readdirSync } from 'fs'

/**
 * Import an mdx blog post file and return the metadata.
 * @param post
 * @returns
 */

interface PostData {
  title: string;
  slug: string;
  series: string | null;
}

async function filterSeriesPosts(fileList: string[], series: string) {
  const checks = await Promise.all(
    fileList.map(async (f) => {
      const file = await import(`@/public/posts/${f}`)
      return {
        title: file.metadata.title,
        slug: f.substring(0, f.lastIndexOf('.')) || f,
        series: file.metadata.series === series ? series : null,
      }
    })
  )

  const filteredResults = checks.filter((f) => f.series !== null)

  return filteredResults
}

export async function getPostData(post: string): Promise<{
  title: string
  description: string
  date: Date
  tags: string[]
  series: string
}> {
  // Lazy load the mdx file for the project
  try {
    const file = await import(`@/public/posts/${post}.mdx`)

    if (file?.metadata) return file.metadata

    throw new Error(`Unable to find metadata in file ${post}.mdx`)
  } catch (error: any) {
    console.info(error?.message)
    // Return empty metadata on failure
    return {
      title: '',
      description: '',
      date: new Date(),
      tags: [],
      series: ''
    }
  }
}

export function getPostsSlugs(): string[] {
  try {
    const fileList: string[] = readdirSync('./public/posts')
    if (fileList.length > 0) {
      return fileList.map((file) => file.substring(0, file.lastIndexOf('.')) || file
      )
    }
  } catch (error) {
    // Intentionally do nothing
    // Add a comment to indicate that the catch block is empty
  }
  return []
}

export async function getSeriesPosts(series: string): Promise<PostData[]> {
  const fileList: string[] = readdirSync('./public/posts')
  return filterSeriesPosts(fileList, series)
}
