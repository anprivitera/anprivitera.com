import React from 'react'

export default function Page({ params }: { params: { post: string } }) {
  const { post } = params
  return (
    <>
      <h1>The post is { post }</h1>
      <div><a href="/">About</a></div>
      <div><a href="/blog">Blog</a></div>
      <div><a href="/blog/posts/ciao">Blog/Posts/Ciao</a></div>
    </>
  )
}
