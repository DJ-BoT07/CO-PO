const { defineConfig } = require("drizzle-kit");

module.exports = defineConfig({
  schema: "./app/drizzle/schema.js", 
  out: "./app/drizzle/migrations",
  dialect: "postgresql",
  strict: true,
  verbose: true,
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
