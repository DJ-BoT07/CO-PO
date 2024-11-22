const { neon } = require('@neondatabase/serverless');
const { drizzle } = require('drizzle-orm/neon-http');

const sql = neon(process.env.DATABASE_URL);
