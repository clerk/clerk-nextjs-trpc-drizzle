'use client'

import Link from 'next/link'
import { trpc } from '../_trpc/client'

export default function Posts() {
  // Use the `getPosts` query from the TRPC client
  const getPosts = trpc.getPosts.useQuery()
  const { isLoading, data: posts } = getPosts

  return (
    <div className="mb-8 flex max-w-2xl flex-col space-y-4">
      {isLoading && <div>Loading...</div>}
      {!isLoading && posts?.length === 0 && <div>No posts found</div>}
      {!isLoading &&
        posts?.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="hover:bg-neutral-100 dark:hover:bg-neutral-800 flex flex-col rounded-lg px-2 py-4 transition-all hover:underline"
          >
            <span className="font-semibold">{post.title}</span>
            <span className="text-sm ml-2">by {post.authorId}</span>
          </Link>
        ))}
    </div>
  )
}
