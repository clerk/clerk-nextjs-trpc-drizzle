import { protectedProcedure, publicProcedure, router } from '../trpc'
import { db } from '@/db/drizzle'
import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { posts as postsTable } from '@/db/schema'

const postSchema = z.object({
  title: z.string(),
  content: z.string(),
  authorId: z.string(),
})

export const postRouter = router({
  getPosts: publicProcedure.query(async () => {
    return await db.select().from(postsTable)
  }),
  getPost: publicProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
    const posts = await db
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, parseInt(input.id)))
    return posts[0]
  }),
  // Protected procedure that requires a user to be signed in
  createPosts: protectedProcedure.input(postSchema).mutation(async ({ input }) => {
    return await db.insert(postsTable).values({
      title: input.title,
      content: input.content,
      authorId: input.authorId,
    })
  }),
})

export type PostRouter = typeof postRouter
