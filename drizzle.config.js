import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:xOI38BJyRTmQ@ep-still-glitter-a58derni.us-east-2.aws.neon.tech/neondb?sslmode=require",
  }
});
