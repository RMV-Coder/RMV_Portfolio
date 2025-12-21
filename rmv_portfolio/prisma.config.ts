import { config } from 'dotenv';
import { resolve } from 'path';
import type { PrismaConfig } from "prisma";

// Load .env.local file
config({ path: resolve(process.cwd(), '.env.local') });

// Helper to read environment variables
const env = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not set. Check your .env.local file.`);
  }
  return value;
};

export default {
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"), // Direct connection for migrations
  }
} satisfies PrismaConfig;
