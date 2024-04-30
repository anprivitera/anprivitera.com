import React from 'react'

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
  const { post } = params
  return (
    <>
      <h1>The post is { post }</h1>
    </>
  )
}
