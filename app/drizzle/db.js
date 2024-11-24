const { neon } = require('@neondatabase/serverless');
const { drizzle } = require('drizzle-orm/neon-http');
import * as schema from "./schema"

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema })
