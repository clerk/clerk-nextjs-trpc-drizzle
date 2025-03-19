import { pgTable, text, serial } from 'drizzle-orm/pg-core'

export const posts = pgTable('posts', {
  id: serial().primaryKey(),
  title: text().notNull(),
  content: text().notNull(),
  authorId: text().notNull(),
})
