import 'dotenv/config'
import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { migrate } from 'drizzle-orm/neon-http/migrator'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in your .env file')
}

const sql = neon(process.env.DATABASE_URL)
const db = drizzle({ client: sql })

migrate(db, { migrationsFolder: './migrations' })
  .then(() => {
    console.log('migrations applied')
    process.exit(0)
  })
  .catch((err) => {
    console.error('migration failed:')
    console.error(err)
    if (err?.cause) console.error('cause:', err.cause)
    process.exit(1)
  })
