import React from 'react'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import { getPostData, getPostsSlugs, getSeriesPosts } from './data'

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
  return (
    <article>
      <header style={{
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexWrap: 'wrap'
      }}
      >
        <h1>{title}</h1>
        <h2>{description}</h2>
        <div className="meta"
          style={{
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            // flexWrap: 'wrap'
          }}
        >
          <CalendarMonthIcon />
          {new Date(date).toISOString().split('T')[0]}{' '}
          {tags.map((tag: string) => (
            <span key={tag}
              style={{
                // marginLeft: '0.5rem',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                // flexWrap: 'wrap'
              }}
            >
              <LocalOfferIcon />
              {tag}
            </span>
          ))}
        </div>
      </header>
      {metadata.series && (
        <section>
          <div className="series-box">This post is part of the {series} series.</div>
          <div>Read other posts in the series:</div>
          <ol>
            {
              seriesPosts.map(({ slug, title }) => (
                <li key={slug}>
                  {slug !== params.post ? (
                    <a href={`/blog/${slug}`}>{title}</a>
                  ) : (
                    <b>{title}</b>
                  )}
                </li>
              ))
            }
          </ol>
        </section>
      )}
      <BlogPost />
    </article>
  )
}
