// https://www.davegray.codes/posts/nextjs-how-to-build-an-rss-feed
import RSS from 'rss'
import { getPostsMetadata } from '../components/data'

export async function GET() {
  const postsMetadata = await getPostsMetadata()
  const feed = new RSS({
    title: 'Andrea Privitera',
    description: 'Vancouver-based Full Stack Web Developer. I talk about Tech, Personal Knowledge Management, Obsidianmd, GTD and Tabletop Gaming',
    feed_url: 'https://www.anprivitera.com/feed.xml',
    site_url: 'https://www.anprivitera.com/',
    managingEditor: 'Andrea Privitera',
    webMaster: 'Andrea Privitera',
    language: 'en-US',
    pubDate: new Date().toUTCString(),
    ttl: 60,
  })

  postsMetadata.map(({ title, description, slug, date }) => (
    feed.item({
      title,
      description,
      url: `https://www.anprivitera.com/blog/${slug}`,
      date: new Date(date).toUTCString()
    })
  ))

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
