import React from 'react'

export default function Page({ params }: { params: { tag: string } }) {
  const { tag } = params
  return (
    <>
      <h1>The tag is { tag }</h1>
    </>
  )
}
