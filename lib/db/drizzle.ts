import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import 'dotenv/config';

function connect() {
  if (!process.env.POSTGRES_URL) throw new Error('Set POSTGRES_URL to enable accounts.');
  return drizzle(postgres(process.env.POSTGRES_URL), { schema });
}

let database: ReturnType<typeof connect> | undefined;
export function getDb() {
  return database ??= connect();
}
