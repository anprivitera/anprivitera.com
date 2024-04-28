import React from 'react'
import SampleNav from '@/app/sample-nav'

export default function Page({ params }: { params: { tag: string } }) {
  const { tag } = params
  return (
    <>
      <h1>The tag is { tag }</h1>
      <SampleNav />
    </>
  )
}
