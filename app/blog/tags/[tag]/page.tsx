import React from 'react'

export default function Page({ params }: { params: { tag: string } }) {
  const { tag } = params
  return (
    <>
      <h1>The tag is { tag }</h1>
      <div><a href="/">About</a></div>
      <div><a href="/blog">Blog</a></div>
      <div><a href="/blog/posts/ciao">Blog/Posts/Ciao</a></div>
      <div><a href="/blog/tags/javascript">Blog/Tags/Javascript</a></div>
    </>
  )
}
