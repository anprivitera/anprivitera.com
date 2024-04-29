import React from 'react'

export default function Page({ params }: { params: { post: string } }) {
  const { post } = params
  return (
    <>
      <h1>The post is { post }</h1>
    </>
  )
}
