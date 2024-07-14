import React from 'react'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import {
  Box, Card, CardContent, Chip, Divider, Link, Stack, Typography
} from '@mui/material'
import { getPostData, getPostsSlugs, getSeriesPosts } from './data'
import '@/app/codeblock.css'

type BlogPageProps = {
  params: { post: string, metadata: Metadata}
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { title } = await getPostData(params.post)
  if (title) {
    return {
      title: `${title} | Andrea Privitera`,
    }
  }
  return {}
}

export function generateStaticParams() {
  const blogPosts = getPostsSlugs()
  return blogPosts.map((post) => ({
    post
  }))
}

export default async function BlogPage({ params }: BlogPageProps) {
  const BlogPost = dynamic(() => import(`@/content/posts/${params.post}.mdx`))
  const metadata = await getPostData(params.post)
  const { title, description, date, tags, series } = metadata
  const seriesPosts = await getSeriesPosts(series)
  const formattedDate = new Date(date).toLocaleDateString('en-US', { dateStyle: 'full' })
  return (
    <Box sx={{ ml: 'auto', mr: 'auto', maxWidth: 680 }}>
      <article>
        <header>
          <Typography sx={{ fontSize: '0.7em' }} align="center">
            Written on <time>{formattedDate}</time>
          </Typography>
          <Typography variant="h1" align="center">
            {title}
          </Typography>
          <Typography variant="subtitle1" component="p" align="center">
            {description}
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 1.5 }}>
            {tags.map((tag: string) => (
              <Chip key={tag} label={tag} component="a" href="http://example.com" clickable />
            ))}
          </Stack>
          <Divider sx={{ mt: 3, mb: 3 }} />
          {metadata.series && (
            <Card raised>
              <CardContent>
                <Typography align="center">
                  This post is part of the <strong>{series}</strong> series.
                  <br />
                  Read other posts in the series:
                </Typography>
                <ol>
                  {
                    seriesPosts.map(({ slug, title }) => (
                      <li key={slug}>
                        {slug !== params.post ? (
                          <Link href={`/blog/${slug}`} underline="none" color="secondary">{title}</Link>
                        ) : (
                          <strong>{title}</strong>
                        )}
                      </li>
                    ))
                  }
                </ol>
              </CardContent>
            </Card>
          )}
        </header>
        <BlogPost />
      </article>
    </Box>
  )
}
