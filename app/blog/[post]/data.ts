/**
 * Import an mdx blog post file and return the metadata.
 * @param post
 * @returns
 */
export async function getPostData(post: string): Promise<{
  title: string
  description: string
  date: Date
  tags: string[]
  series: string
}> {
  // Lazy load the mdx file for the project
  try {
    const file = await import(`@/content/posts/${post}.mdx`)

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
