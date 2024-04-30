import React from 'react'
import dynamic from 'next/dynamic'

type BlogPageProps = {
  params: { post: string }
}

export async function generateStaticParams() {
  const blogPosts = ['2024-04-01-prova']
  return blogPosts.map((post) => ({
    post
  }))
}

export default function BlogPage({ params }: BlogPageProps) {
  const BlogPost = dynamic(() => import(`@/content/posts/${params.post}.mdx`))
  return (
    <>
      <BlogPost />
    </>
  )
}
