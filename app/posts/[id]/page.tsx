'use client'

import { trpc } from '@/app/_trpc/client'
import { use } from 'react'

export default function Post({ params }: { params: Promise<{ id: string }> }) {
  // Params are wrapped in a promise, so we need to use React's `use()` hook to unwrap the params
  const unwrappedParams = use(params)
  const { id } = unwrappedParams
  // Use the `getPost` query from the TRPC client
  const { data: post, isLoading } = trpc.getPost.useQuery({ id })

  return (
    <div className="min-h-screen flex flex-col items-center justify-center -mt-16">
      {isLoading && <p>Loading...</p>}
      {!isLoading && !post && <p>No post found.</p>}
      {!isLoading && post && (
        <article className="w-full max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 ">{post.title}</h1>
          <p className="text-sm sm:text-base">by {post.authorId}</p>
          <div className="prose prose-gray prose-sm sm:prose-base lg:prose-lg mt-4 sm:mt-8">
            {post.content || 'No content available.'}
          </div>
        </article>
      )}
    </div>
  )
}
