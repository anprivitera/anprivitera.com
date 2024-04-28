import React from 'react'
import SampleNav from '@/app/sample-nav'

export default function Page({ params }: { params: { post: string } }) {
  const { post } = params
  return (
    <>
      <h1>The post is { post }</h1>
      <SampleNav />
    </>
  )
}
