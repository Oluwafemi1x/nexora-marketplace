import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export function getDb() {
  if (!env.DB) {
    throw new Error(
      "Database binding `DB` is unavailable. Configure your production database environment before using persistent storage."
    );
  }

  return drizzle(env.DB, { schema });
}
