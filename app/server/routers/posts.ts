import { protectedProcedure, publicProcedure, router } from '../trpc'
import { db } from '@/db/drizzle'
import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { posts as postsTable } from '@/db/schema'

const postSchema = z.object({
  title: z.string(),
  content: z.string(),
})

export const postRouter = router({
  getPosts: publicProcedure.query(async () => {
    return await db.select().from(postsTable)
  }),
  getPost: publicProcedure
    .input(z.object({ id: z.coerce.number().int() }))
    .query(async ({ input }) => {
      const rows = await db
        .select()
        .from(postsTable)
        .where(eq(postsTable.id, input.id))
      return rows[0]
    }),
  createPosts: protectedProcedure
    .input(postSchema)
    .mutation(async ({ input, ctx }) => {
      return await db.insert(postsTable).values({
        title: input.title,
        content: input.content,
        authorId: ctx.auth.userId,
      })
    }),
})

export type PostRouter = typeof postRouter
