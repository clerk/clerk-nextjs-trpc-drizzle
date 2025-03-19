'use client'

import Link from 'next/link'
import { trpc } from '../_trpc/client'

export default function Posts() {
  // Use the `getPosts` query from the TRPC client
  const getPosts = trpc.getPosts.useQuery()
  const { isLoading, data: posts } = getPosts

  return (
    <div className="relative flex max-w-2xl flex-col rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-md">
      <div className="h-[calc(3*theme(spacing.24))] overflow-y-auto px-4 pb-6">
        {isLoading && <div className="p-4">Loading...</div>}
        {!isLoading && posts?.length === 0 && <div className="p-4">No posts found</div>}
        {!isLoading &&
          posts?.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="hover:bg-neutral-100 dark:hover:bg-neutral-800 flex flex-col rounded-lg px-2 py-4 transition-all hover:underline"
            >
              <span className="text-lg font-semibold">{post.title}</span>
              <span className="text-sm">by {post.authorId}</span>
            </Link>
          ))}
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-black to-transparent" />
    </div>
  )
}
